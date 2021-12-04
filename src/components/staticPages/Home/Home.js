import React from "react";
import "./Home.css";
import "../../ResponsiveStyle/__home_responive_style.scss";
import Container from "../../common/MainContainer/Container";
import { HomePageData } from "../../../utils/HomeData";
import { Link } from "react-router-dom";
import OddEvenSections from "../../common/OddEvenImgSection/OddEvenImgSection";
import LearningCards from "../../common/LearningCard/LearningCards";

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
  } = HomePageData;

  return (
    <>
      <Container className="home-container">
        <div className="home-wrapper">
          <div className="sub-section__two_bg"></div>
          <div className="sub-section__two_bg_2"></div>
          <div className="sub-section__two_bg_3"></div>
          <div className="sub-section__two_bg_4"></div>
          <div className="sub-section__two_bg_5"></div>
          <div className="sub-section__two_bg_6"></div>
          <div className="sub-section__two_bg_7"></div>
          <div className="sub-section__two_bg_8"></div>
          <div className="sub-section__one section_container">
            <div className="left-side">
              <p
                className="heading1"
                dangerouslySetInnerHTML={{ __html: mainHeading }}
              ></p>
              <p
                className="sub_heading"
                dangerouslySetInnerHTML={{ __html: subHeading }}
              ></p>
              <Link to="/feature" className="btn-link btn">
                learn more
              </Link>
            </div>
            <div className="right-side">
              <img src={dummyImgOne} />
            </div>
          </div>
          <div className="sub-section__two section_container">
            <div className="sub-section__two__contaianer">
              <p
                className="heading2"
                dangerouslySetInnerHTML={{ __html: debugCodeHeading }}
              ></p>
              <p
                className="sub_heading2"
                dangerouslySetInnerHTML={{ __html: debugSubHeading }}
              ></p>
              <div className="img">
                <img src={dummyImg} />
              </div>
              <Link to="/feature" className="try-now-btn btn">
                try now
              </Link>
            </div>
          </div>
          <div className="sub-section__three">
            <OddEvenSections tiles={tiles} />
          </div>
          <div className="logo-learning-wrapper">
            <div className="l-l-bg-r"></div>
            <div className="logo-section">
              {/* <div className="logo-section-bg-wrapper"></div> */}
              <div className="logo-section-bg">
                <div className="section_container">
                  <div className="logo-section_container">
                    {companyLogo &&
                      companyLogo.map((logos, i) => {
                        const { logo = {} } = logos;
                        return (
                          <div className="logo-tile" key={i}>
                            <Link to={logo.url}>
                              <img src={logo.img} />
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="learning-card-section">
              <div className=" section_container">
                <div className="learning-card-section-bg"></div>
                <LearningCards cardsData={cardsData} />
              </div>
            </div>
          </div>

          <div className="sub-section__three">
            <OddEvenSections
              tiles={tilesBottom}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
