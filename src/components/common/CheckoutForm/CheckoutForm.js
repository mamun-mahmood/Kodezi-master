import React from 'react'
import { notification } from 'antd'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { axiosInstance } from '../../../network/apis'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (!stripe || !elements) {
        notification.error({ message: 'Please try again!' })
        return
      }

      // Create payment method
      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          email: 'test@gmail.com'
        }
      })

      if (result.error) {
        notification.error({ message: result.error.message })
      } else {
        const res = await axiosInstance.post('/v1/subscribe', {
          payment_method: result.paymentMethod.id,
          email: 'test@gmail.com'
        })
        // eslint-disable-next-line camelcase
        const { client_secret, status } = res.data

        if (status === 'requires_action') {
          const result = await stripe.confirmCardPayment(client_secret)
          if (result.error) {
            notification.error({ message: result.error })
          } else {
            notification.error({ message: 'Plan subscribed successfully!' })
          }
        } else {
          notification.error({ message: 'Plan subscribed successfully!' })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: '500px',
          margin: '100px',
          alignItems: 'center'
        }}
      >
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Subscribe
        </button>
      </div>
    </form>
  )
}
export default CheckoutForm
