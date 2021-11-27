import React from 'react'
import LearningCards from '../LearningCard/LearningCards.js'
import { LearingPageData } from '../../data'
import {
  LearningCard,
  LearningCardsMoreVideo,
  OddEvenSections
} from '../videoCard/VideoCard'
import './Learn.scss'
const Learn = () => {
  const {
    cardsData,
    Lheading,
    LsubHeading,
    popularvideocard,
    moreVideoCard,
    tiles,
    singlesectino,
    singlesectinotwo
  } = LearingPageData
  return (
    <>
      <div className="learing_wrapper">
        <div className="bg_color_wrapper">
          <div className="bg_color_one"></div>
          <div className="bg_color_tow"></div>
          <div className="bg_color_three"></div>
          <div className="bg_color_fore"></div>
          <div className="bg_color_five"></div>
          <div className="bg_color_six"></div>
          <div className="bg_color_seven"></div>
          <div className="bg_color_eight"></div>
          <div className="section_container">
            <div className="heading_wrapper">
              <p
                className="l_heading"
                dangerouslySetInnerHTML={{ __html: Lheading }}
              ></p>
              <p
                className="l_sub_heading"
                dangerouslySetInnerHTML={{ __html: LsubHeading }}
              ></p>
            </div>
            <LearningCards cardsData={cardsData} />
          </div>
          <div className="LearningCard_Wrapper">
            <LearningCard cardsData={popularvideocard} />
          </div>
          <div>
            <div className="section_container">
              <LearningCardsMoreVideo moreVideoCard={moreVideoCard} />
            </div>
          </div>
        </div>
        <div className="learn_last_seaction">
          <OddEvenSections
            tiles={tiles}
            singlesectino={singlesectino}
            singlesectinotwo={singlesectinotwo}
          />
        </div>
      </div>
    </>
  )
}

export default Learn
