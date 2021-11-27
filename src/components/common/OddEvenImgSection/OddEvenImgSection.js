import React from 'react'
import { Link } from 'react-router-dom'
import './OddEven.scss'

const OddEvenSections = (props) => {
  const { tiles, fristTiles, lastTiles, mastTiles } = props
  return (
    <>
      {fristTiles &&
        fristTiles.length &&
        fristTiles.map((tile, index) => {
          const { title, icon, subTitle, text, btnLabel, image, background } =
            tile
          const odd = index % 2

          return (
            <div
              key={`text-image-row-${index}`}
              className={`main ${odd ? 'Frow-odd' : 'Frow-even'}`}
              style={{ backgroundColor: background }}
            >
              <div className="row-even-bg"></div>
              <div className="main-container section_container">
                <div className="content-detail inner-sec">
                  <div className="text-image-container">
                    {icon && (
                      <div className="icon_wrapper">
                        {' '}
                        <div className="icon">
                          <img src={icon} alt="icon" />
                        </div>
                      </div>
                    )}
                    <p className="text-image-container__title">{title}</p>
                    {subTitle && (
                      <p className="text-image-container__sub-title">
                        {subTitle}
                      </p>
                    )}
                    {text && (
                      <p className="text-image-container__text">{text}</p>
                    )}
                    {btnLabel && (
                      <Link to={btnLabel.url} className="btn">
                        {btnLabel.label}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="img-section inner-sec">
                  <img
                    src={image.url}
                    className={odd ? 'odd-image-wrap' : ''}
                  />
                </div>
              </div>
            </div>
          )
        })}
      {tiles &&
        tiles.length &&
        tiles.map((tile, index) => {
          const { title, icon, subTitle, text, btnLabel, image, background } =
            tile
          const odd = index % 2

          return (
            <div
              key={`text-image-row-${index}`}
              className={`main ${odd ? 'row-odd' : 'row-even'}`}
              style={{ backgroundColor: background }}
            >
              <div className="row-even-bg"></div>
              <div className="main-container section_container">
                <div className="content-detail inner-sec">
                  <div className="text-image-container">
                    {icon && (
                      <div className="icon_wrapper">
                        {' '}
                        <div className="icon">
                          <img src={icon} alt="icon" />
                        </div>
                      </div>
                    )}
                    <p className="text-image-container__title">{title}</p>
                    {subTitle && (
                      <p className="text-image-container__sub-title">
                        {subTitle}
                      </p>
                    )}
                    {text && (
                      <p className="text-image-container__text">{text}</p>
                    )}
                    {btnLabel && (
                      <Link to={btnLabel.url} className="btn">
                        {btnLabel.label}
                      </Link>
                    )}
                  </div>
                </div>
                <div
                  className="img-section inner-sec"
                  style={{ marginRight: '15px !important' }}
                >
                  <img
                    src={image.url}
                    className={odd ? 'odd-image-wrap' : ''}
                  />
                </div>
              </div>
            </div>
          )
        })}
      {mastTiles &&
        mastTiles.length &&
        mastTiles.map((tile, index) => {
          const { title, icon, subTitle, text, btnLabel, image, background } =
            tile
          const odd = index % 2

          return (
            <div
              key={`text-image-row-${index}`}
              className={`main ${odd ? 'Mrow-odd' : 'Mrow-even'}`}
              style={{ backgroundColor: background }}
            >
              <div className="row-even-bg"></div>
              <div className="main-container section_container">
                <div className="content-detail inner-sec">
                  <div className="text-image-container">
                    {icon && (
                      <div className="icon_wrapper">
                        {' '}
                        <div className="icon">
                          <img src={icon} alt="icon" />
                        </div>
                      </div>
                    )}
                    <p className="text-image-container__title">{title}</p>
                    {subTitle && (
                      <p className="text-image-container__sub-title">
                        {subTitle}
                      </p>
                    )}
                    {text && (
                      <p className="text-image-container__text">{text}</p>
                    )}
                    {btnLabel && (
                      <Link to={btnLabel.url} className="btn">
                        {btnLabel.label}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="img-section inner-sec">
                  <img
                    src={image.url}
                    className={odd ? 'odd-image-wrap' : ''}
                    style={{ paddingRight: '30px' }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      {lastTiles &&
        lastTiles.length &&
        lastTiles.map((tile, index) => {
          const { title, icon, subTitle, text, btnLabel, image, background } =
            tile
          const odd = index % 2

          return (
            <div
              key={`text-image-row-${index}`}
              className={`main ${odd ? 'Lrow-odd' : 'Lrow-even'}`}
              style={{ backgroundColor: background }}
            >
              <div className="row-even-bg"></div>
              <div className="main-container section_container">
                <div className="content-detail inner-sec">
                  <div className="text-image-container">
                    {icon && (
                      <div>
                        {' '}
                        <div className="sub-section_logo">
                          <img src={icon} alt="icon" />
                        </div>
                      </div>
                    )}
                    <p className="text-image-container__title">{title}</p>
                    {subTitle && (
                      <p className="text-image-container__sub-title">
                        {subTitle}
                      </p>
                    )}
                    {text && (
                      <p className="text-image-container__text">{text}</p>
                    )}
                    {btnLabel && (
                      <Link to={btnLabel.url} className="btn">
                        {btnLabel.label}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="img-section inner-sec">
                  <img
                    src={image.url}
                    className={odd ? 'odd-image-wrap' : ''}
                  />
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default OddEvenSections
