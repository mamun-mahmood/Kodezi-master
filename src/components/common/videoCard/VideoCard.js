import React, { useState } from 'react'
import './videocard.scss'
import { Link } from 'react-router-dom'

export const LearningCard = ({ cardsData }) => {
  const [hover, sethover] = useState(1)
  const { heading, cards, mospopulerheading, WMtitle } = cardsData
  return (
    <div className="popular_video_section_container">
      <div className="learning-card-wrapper">
        {heading && <p className="heading">{heading}</p>}
        {WMtitle && <p className="heading">{WMtitle}</p>}
        {mospopulerheading && (
          <p className="learning-sub-heading">{mospopulerheading}</p>
        )}
        <div className="vcards-wrapper">
          {cards &&
            cards.length &&
            cards.map((card, index) => {
              const {
                title = '',
                cTitle = '',
                time = '',
                image = {},
                icon = {},
                icontime = {}
              } = card

              return (
                <>
                  <div
                    key={index}
                    onMouseOver={() => sethover(index)}
                    className={
                      hover === index
                        ? 'Vsingle-card hoverActive'
                        : 'Vsingle-card'
                    }
                  >
                    <div className="video_thumeil">
                      <img src={image.url} />
                      <div className="play_Vid_Icon_Wrapper">
                        <img src={icon.url} />
                      </div>
                    </div>
                    <div className="card__detail">
                      <p className="card__title">{title}</p>
                      <div className="time_zone_wrapper">
                        <div className="time_zone_icons">
                          <img src={icontime.url} />
                        </div>
                        <p className="card__text">{time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w_m_v_card">
                    <div className="w_m_v_img">
                      {/* <img src={image.url} alt={image.alt} /> */}
                    </div>
                    <div className="">{cTitle}</div>
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export const LearningCardsMoreVideo = ({ moreVideoCard }) => {
  const [hover, sethover] = useState(1)
  const { cards, WMtitle, Searchimg } = moreVideoCard
  return (
    <div>
      <div className="learning-card-wrapper">
        <div className="More_video_header_content">
          <div className="search_input_Wrapper">
            <input
              className="input"
              type="text"
              placeholder="Search for Video"
            />
            <div className="search_icon_wrapper">
              <img src={Searchimg.url} alt="img" />
            </div>
          </div>
          {WMtitle && <p className="watch_heading">{WMtitle}</p>}
        </div>

        <div className="Watch_cards_wrapper">
          {cards &&
            cards.length &&
            cards.map((card, index) => {
              const { title = '', image = {}, icon = {} } = card

              return (
                <>
                  <div
                    key={index}
                    onMouseOver={() => sethover(index)}
                    className={
                      hover === index
                        ? 'watchsingle-card hoverActive'
                        : 'watchsingle-card'
                    }
                  >
                    <div className="w_m_v_card">
                      <div className="img_content_wrapper">
                        <div className="w_m_v_img_Wrapper">
                          <div className="w_m_v_img">
                            <img src={image.url} alt={image.alt} />
                          </div>
                        </div>
                        <div className="title">{title}</div>
                      </div>
                      <div className="play_Vidoe_icon">
                        <img src={icon.url} alt={image.alt} />
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export const OddEvenSections = ({ tiles, singlesectino, singlesectinotwo }) => {
  return (
    <>
      {tiles &&
        tiles.length &&
        tiles.map((tile, index) => {
          const { title, icon, subTitle, text, image, background } = tile
          const odd = index % 2

          return (
            <>
              <div
                key={`text-image-row-${index}`}
                className={`main ${odd ? 'lrow-odd' : 'lrow-even'}`}
                style={{ backgroundColor: background }}
              >
                <div className="lmain-container  section_container">
                  <div className="lcontent-detail linner-sec">
                    <div className="ltext-image-container">
                      {icon && (
                        <div className="licon_wrapper">
                          {' '}
                          <div className="licon one">
                            <img src={icon.url} alt="icon" />
                          </div>
                        </div>
                      )}
                      <p className="ltext-image-container__title">{title}</p>
                      {subTitle && (
                        <p className="ltext-image-container__sub-title">
                          {subTitle}
                        </p>
                      )}
                      {text && (
                        <p className="ltext-image-container__text">{text}</p>
                      )}
                    </div>
                  </div>
                  <div className="limg-section inner-sec">
                    <img
                      src={image.url}
                      className={odd ? 'lodd-image-wrap' : ''}
                    />
                  </div>
                </div>
              </div>
            </>
          )
        })}
      {singlesectinotwo &&
        singlesectinotwo.length &&
        singlesectinotwo.map((tile, index) => {
          const { title, icon, subTitle, text, image, btnLabel, background } =
            tile
          const odd = index % 2

          return (
            <>
              <div
                key={`text-image-row-${index}`}
                className={`main ${odd ? 'lrow-odd' : 'lrow-odd'}`}
                style={{ backgroundColor: background }}
              >
                <div className="lmain-container  section_container">
                  <div className="lcontent-detail linner-sec">
                    <div className="ltext-image-container">
                      {icon && (
                        <div className="licon_wrapper">
                          {' '}
                          <div className="licon">
                            <img src="/images/phone.png" alt="icon" />
                          </div>
                        </div>
                      )}
                      <p className="ltext-image-container__title">{title}</p>
                      {subTitle && (
                        <p className="ltext-image-container__sub-title">
                          {subTitle}
                        </p>
                      )}
                      {text && (
                        <p className="ltext-image-container__text">{text}</p>
                      )}
                      {btnLabel && (
                        <Link to={btnLabel.url} className="lbtn">
                          {btnLabel.label}
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="limg-section inner-sec">
                    <img
                      src={image.url}
                      className={odd ? 'lodd-image-wrap' : ''}
                    />
                  </div>
                </div>
              </div>
            </>
          )
        })}
      {singlesectino &&
        singlesectino.length &&
        singlesectino.map((tile, index) => {
          const { title, icon, subTitle, text, image, btnLabel, background } =
            tile
          const odd = index % 2

          return (
            <>
              <div
                key={`text-image-row-${index}`}
                className={`main ${odd ? 'lrow-odd' : 'lrow-even'}`}
                style={{ backgroundColor: background }}
              >
                <div className="lmain-container  section_container">
                  <div className="lcontent-detail linner-sec">
                    <div className="ltext-image-container">
                      {icon && (
                        <div className="licon_wrapper">
                          {' '}
                          <div className="licon">
                            <img src={icon} alt="icon" />
                          </div>
                        </div>
                      )}
                      <p className="ltext-image-container__title">{title}</p>
                      {subTitle && (
                        <p className="ltext-image-container__sub-title">
                          {subTitle}
                        </p>
                      )}
                      {text && (
                        <p className="ltext-image-container__text">{text}</p>
                      )}
                      {btnLabel && (
                        <Link to={btnLabel.url} className="lbtn">
                          {btnLabel.label}
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="limg-section inner-sec">
                    <img
                      src={image.url}
                      className={odd ? 'lodd-image-wrap' : ''}
                    />
                  </div>
                </div>
              </div>
            </>
          )
        })}
    </>
  )
}
