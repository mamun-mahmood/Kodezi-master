import React, { useState } from 'react'
import BackBtnIcon from '../../assets/icons/backBtn'
import { codeAITypesMap, getSubHeaderData } from '../../utils/codeAI'
import Container from '../common/MainContainer/Container'
import './ExplainCode.scss'
import ExplainCodeSubHeader from './ExplainCodeSubHeader'
import ExplainCodeTabs from './explainCodeTabs'

const ExplainCode = ({ match, history }) => {
  const [activeTabKey, setActiveTabKey] = useState('1')
  const {
    params: { aiType }
  } = match
  if (!codeAITypesMap[aiType]) {
    history.push('/404')
    return false
  }
  const { subHeaderImg, subHeaderTitle, subHeaderSubTitle } =
    getSubHeaderData(aiType)

  return (
    <>
      <div className="explain_code_main">
        <div className="esplain_bg"></div>
        <div className="esplain_bg3"></div>
        <div className="esplain_bg2"></div>
        <ExplainCodeSubHeader
          imgUrl={subHeaderImg}
          heading={subHeaderTitle}
          subHeading={subHeaderSubTitle}
        />
        <Container>
          <div className="explain-wrapper">
            <div className="explain-code-wrapper section_container">
              <div className="explain_back_btn">
                <button
                  className="back-btn"
                  onClick={() => history.push('/feature')}
                >
                  <BackBtnIcon />
                </button>
              </div>

              <div className="main-tabs">
                <ExplainCodeTabs
                  aiType={aiType}
                  activeTabKey={activeTabKey}
                  setActiveTabKey={setActiveTabKey}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ExplainCode
