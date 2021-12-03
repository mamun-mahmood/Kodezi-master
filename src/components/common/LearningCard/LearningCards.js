import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LearningCards.scss'
const LearningCards = ({ cardsData, cornerImg }) => {
  const [hover, sethover] = useState(1)
  const { push } = useHistory()
  const {
    heading,
    // subHeading,
    Lheading,
    para,
    cards,
    Lpera,
    mospopulerheading
  } = cardsData

  return (
    <div className="learning-card-wrapper">
      {heading && <p className="heading2">{heading}</p>}
      {/* {subHeading && <p className="learning-sub-heading">{subHeading}</p>} */}
      {para && <p className="sub_heading2">{para}</p>}
      {Lheading && <h1 className="l_heading">{Lheading}</h1>}
      {Lpera && <p className="l_sub_heading">{Lpera}</p>}
      {mospopulerheading && <p className="v_heading">{mospopulerheading}</p>}
      <div className="container">
        <div className="row cards-wrapper">
        {cards &&
          cards.length &&
          cards.map((card, index) => {
            const {
              title = '',
              time = '',
              text = '',
              image = {},
              icon = {},
              url = ''
            } = card

            return (
              <div key={index} className={ cornerImg === true ? 'col-md-6' : 'col-md-6 col-lg-3' }>
                <div
                onMouseOver={() => sethover(index)}
                className={
                  hover === index ? 'single-card hoverActive' : 'single-card'
                }
                onClick={() => {
                  if (url) push(url)
                }}
              >
                <div className="card-detail">
                  <div className="card-icon">
                    <img src={image.url} />
                  </div>
                  <div className="vcard-icon">
                    <img src={icon.url} />
                  </div>
                  <div className="card-content">
                    <p className="card__title">{title}</p>
                    <p className="card__text">{text}</p>
                    <p className="card__text">{time}</p>
                  </div>
                </div>
                {cornerImg && (
                  <div className="corner-img">
                    <img src="/images/cardOverLay.svg" />
                  </div>
                )}
              </div>
              </div>
            )
          })}
      </div>
        </div>
    </div>
  )
}

export default LearningCards
