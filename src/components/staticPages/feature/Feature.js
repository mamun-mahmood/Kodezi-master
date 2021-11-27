import React from 'react'
import './Feature.scss'
import '../../ResponsiveStyle/__feature_responive_style.scss'
import Container from '../../common/MainContainer/Container'
import { FeatureData } from '../../../utils/FeatureData'
import { FeatureWrittenData } from '../../../utils/FeatureWrittenData'
import OddEvenSections from '../../common/OddEvenImgSection/OddEvenImgSection'
import LearningCards from '../../common/LearningCard/LearningCards'
import WritettenCard from '../../common/LearningCard/WritettenCard'

const Home = () => {
  const { cardsData, tiles } = FeatureData
  const { FeatWritenData } = FeatureWrittenData

  return (
    <>
      <Container className="feature-container">
        <div className="feature-wrapper section_container">
          <p className="heading">Our Features</p>

          <p className="sub-heading">Programming</p>
          <div className="bg-wrapper-overlay">
            <div className="bg-container-one"></div>
            <div className="bg-container-two"></div>
            <div className="bg-container-three"></div>
            <div className="bg-container-fore"></div>
          </div>
          <div className="feature-card-section">
            <LearningCards cardsData={cardsData} cornerImg={true} />
          </div>

          <p className="sub-heading second">Written Content</p>
          <div id="" className="feature-card-section">
            <WritettenCard FeatWritenData={FeatWritenData} cornerImg={true} />
          </div>

          <div className="feature-tiles">
            <OddEvenSections tiles={tiles} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
