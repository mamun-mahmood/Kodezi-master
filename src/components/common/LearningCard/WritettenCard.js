import React, { useState } from 'react'
import './LearningCards.scss'

const WritettenCard = ({ FeatWritenData, cornerImg }) => {
  const [hover, sethover] = useState(1)
  const { heading, subHeading, para, cards } = FeatWritenData
  return (
    <div className="learning-card-wrapper">
      {heading && <p className="heading">{heading}</p>}
      {subHeading && <p className="learning-sub-heading">{subHeading}</p>}
      {para && <p className="sub-heading">{para}</p>}
      <div className="container">
        <div className="row cards-wrapper">
        {cards &&
          cards.length &&
          cards.map((card, index) => {
            const { title = '', text = '', image = {} } = card

            return (
              <div className="col-md-6" key={index}>
                <div
                onMouseOver={() => sethover(index)}
                className={
                  hover === index ? 'single-card hoverActive' : 'single-card'
                }
                onClick={() =>
                  alert(
                    'Launching Soon, Currently only available to specific users'
                  )
                }
                style={{ height: '80%' }}
              >
                <div className="card-detail">
                  <div className="card-icon">
                    <img src={image.url} />
                  </div>
                  <div className="card-content">
                    <p className="card__title">{title}</p>
                    <p className="card__text">{text}</p>
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

export default WritettenCard
