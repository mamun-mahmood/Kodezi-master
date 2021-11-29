import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosInstance } from '../../../network/apis'
import { STRIPE_PUB_KEY } from '../../../utils/Constants'
import { loadStripe } from '@stripe/stripe-js'
import { UserContext } from '../../../contexts/userContext'

const PricingCards = ({ packages = [] }) => {
  const [userContext] = useContext(UserContext)
  // const [, setUserContext] = useContext(UserContext)

  const handleStripePayment = async ({
    id: planId,
    status,
    price,
    pricePerMonth
  }) => {
    try {
      if (!userContext.email) {
        const { push } = useHistory()
        push('/login')
        return
      }
      const stripePromise = loadStripe(STRIPE_PUB_KEY)
      const stripe = await stripePromise
      const {
        data: { id } // get credits, key is 'credits'
      } = await axiosInstance.post(
        '/v1/subscribe/payment',
        {
          product: {
            planId,
            name: `${status} plan`,
            price: price.replace('$', ''),
            pricePerMonth,
            quantity: 1,
            status,
            email: userContext.email
          }
        },
        {
          'Content-Type': 'application/json'
        }
      )
      // Set user credits
      // setUserContext((oldValues) => ({
      //   ...oldValues,
      //   credits
      // }))
      const stripePayload = { sessionId: id }
      await stripe.redirectToCheckout(stripePayload)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    // <div className="learning-card-wrapper">
    <div className="cards-wrapper">
      {packages &&
        packages.length &&
        packages.map((card, index) => {
          const {
            status,
            price,
            pricePerMonth,
            subHeading,
            iconText,
            pricingButton
          } = card

          return (
            <div key={index} className="single-card">
              <div className="card-detail">
                {status && <p className="status">{status}</p>}
                {price && (
                  <p className="heading-plan">
                    {price}
                    <span>{pricePerMonth}</span>
                  </p>
                )}
                {subHeading && <p>{subHeading}</p>}
                <div className="points">
                  {iconText &&
                    iconText.map((icontext, index) => {
                      const { icon, noticon, boldText, text } = icontext
                      return (
                        <div className="custom-flex" key={index}>
                          <div className="card-icon">
                            <img src={icon} />
                            <div className="card-noticon">
                              <img src={noticon} />
                            </div>
                          </div>

                          <div className="card-content">
                            {boldText && (
                              <p
                                className="card__title"
                                dangerouslySetInnerHTML={{ __html: boldText }}
                              ></p>
                            )}
                            {text && (
                              <p className="Pricing_card__text">{text}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
              {pricingButton && (
                <div className="pricing-btn">
                  <button onClick={() => handleStripePayment(card)}>
                    {pricingButton.label}
                  </button>
                </div>
              )}
            </div>
          )
        })}
    </div>
    // </div>
  )
}

export default PricingCards
