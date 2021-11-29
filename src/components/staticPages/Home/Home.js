import React from 'react'
import './HomeNew.css'
// import './Home.css'
import '../../ResponsiveStyle/__home_responive_style.scss'
import Container from '../../common/MainContainer/Container'
import { HomePageData } from '../../../utils/HomeData'
import { Link } from 'react-router-dom'
import OddEvenSections from '../../common/OddEvenImgSection/OddEvenImgSection'
import LearningCards from '../../common/LearningCard/LearningCards'

const Home = () => {
  const {
    dummyImg,
    dummyImgOne,
    mainHeading,
    subHeading,
    debugCodeHeading,
    debugSubHeading,
    tiles,
    companyLogo,
    cardsData,
    tilesBottom,
    fristTilesbottom,
    lastTilesbottom
  } = HomePageData

  return (
    <>
      <div className="home-wrapper">
        <div className="sub-section__two_bg"></div>
          <div className="sub-section__two_bg_2"></div>
          <div className="sub-section__two_bg_3"></div>
          <div className="sub-section__two_bg_4"></div>
          <div className="sub-section__two_bg_5"></div>
          <div className="sub-section__two_bg_6"></div>
          <div className="sub-section__two_bg_7"></div>
          <div className="sub-section__two_bg_8"></div>
        <div className="container mb-5" style={{ marginTop: '5%' }}>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0" style={{ textAlign: 'center', marginTop: '8%' }}>
          <p className="heading1" dangerouslySetInnerHTML={{ __html: mainHeading }}></p>
          <p className="sub_heading" dangerouslySetInnerHTML={{ __html: subHeading }}></p>
          <Link to="/feature" className="btn-link btn">
                learn more
              </Link>
            </div>
            <div className="col-md-6">

          <img className="w-100 sec1-img" src={dummyImgOne} />
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5" style={{ textAlign: 'center' }}>
        <p
                className="heading1"
                dangerouslySetInnerHTML={{ __html: debugCodeHeading }}
              ></p>
              <p
                className="sub_heading"
                dangerouslySetInnerHTML={{ __html: debugSubHeading }}
              ></p>
              <img className="w-100" src={dummyImg} />
              <Link to="/feature" className="try-now-btn btn mt-5">
                try now
              </Link>
        </div>
        <div className="home-wrapper">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: 'center' }}>
          <p className="heading1" dangerouslySetInnerHTML={{ __html: tiles[0].title }}></p>
          <p className="sub_heading" dangerouslySetInnerHTML={{ __html: tiles[0].text }}></p>
          <Link to="/feature" className="try-now-btn btn mt-5 mb-5">
                ask now
              </Link>
            </div>
            <div className="col-md-6">

          <img className="w-100" src={tiles[0].image.url} />
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">

          <img className="w-100" src={tiles[1].image.url} />
            </div>
            <div className="col-md-6" style={{ textAlign: 'center' }}>
          <p className="heading1" dangerouslySetInnerHTML={{ __html: tiles[1].title }}></p>
          <p className="sub_heading" dangerouslySetInnerHTML={{ __html: tiles[1].text }}></p>
          <Link to="/feature" className="try-now-btn btn mt-5 mb-5">
                ask now
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: 'center', marginTop: '10%' }}>
          <p className="heading1" dangerouslySetInnerHTML={{ __html: tiles[2].title }}></p>
          <p className="sub_heading" dangerouslySetInnerHTML={{ __html: tiles[2].text }}></p>
          <Link to="/feature" className="try-now-btn btn mt-5 mb-5">
                access now
              </Link>
            </div>
            <div className="col-md-6">

          <img className="w-100" src={tiles[2].image.url} />
            </div>
          </div>
        </div>
          <div className="logo-learning-wrapper">
            <div className="l-l-bg-r"></div>
            <div className="logo-section">
              {/* <div className="logo-section-bg-wrapper"></div> */}
              <div className="logo-section-bg">
                <div className="section_container">
                  <div className="logo-section_container">
                          <div className="container ">
                            <div className="row">
                    {companyLogo &&
                      companyLogo.map((logos, i) => {
                        const { logo = {} } = logos
                        return (
                          <div className="col-md-3 col-6 mt-md-5 mb-1" key={i}>
                            <Link to={logo.url}>
                              <img className="w-75" src={logo.img} />
                            </Link>
                          </div>
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="learning-card-section mt-5 mb-5">
              <div className="container">
              <p className="heading1">{cardsData.heading}</p>
              <p className="sub_heading">{cardsData.para}</p>
              </div>
              <div className=" section_container">
                <div className="learning-card-section-bg"></div>
                <LearningCards cardsData={cardsData} />
              </div>
            </div>
          </div>
          <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: 'center', marginTop: '5%' }}>
            <img src={fristTilesbottom[0].icon} alt="icon" />
          <p className="heading1">{fristTilesbottom[0].title}</p>
          <p className="sub_heading" >{fristTilesbottom[0].subTitle}</p>
          <p>{fristTilesbottom[0].text}</p>
            </div>
            <div className="col-md-6">

          <img className="w-100" src={fristTilesbottom[0].image.url} />
            </div>
          </div>
        </div>
          <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-6">

          <img className="w-100" src={tilesBottom[0].image.url} />
            </div>
            <div className="col-md-6" style={{ textAlign: 'center', marginTop: '5%' }}>
            <img src={tilesBottom[0].icon} alt="icon" />
          <p className="heading1">{tilesBottom[0].title}</p>
          <p className="sub_heading" >{tilesBottom[0].subTitle}</p>
          <p>{tilesBottom[0].text}</p>
            </div>
          </div>
        </div>
          <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: 'center', marginTop: '5%' }}>
            <img src={lastTilesbottom[0].icon} alt="icon" />
          <p className="heading1">{lastTilesbottom[0].title}</p>
          <p className="sub_heading" >{lastTilesbottom[0].subTitle}</p>
          <p>{lastTilesbottom[0].text}</p>
            </div>
            <div className="col-md-6">

          <img className="w-100" src={lastTilesbottom[0].image.url} />
            </div>
          </div>
        </div>
          {/* <div className="sub-section__three">
            <OddEvenSections
              // tiles={tilesBottom}
              mastTiles={tilesBottom}
              lastTiles={lastTilesbottom}
              fristTiles={fristTilesbottom}
            />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home
