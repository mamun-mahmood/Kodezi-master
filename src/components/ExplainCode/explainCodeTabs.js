import { notification, Tabs } from 'antd'
import React, { useState, useEffect, useContext } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-textmate'
import ExampleIcon from '../../assets/icons/example'
import StartUsingIcon from '../../assets/icons/starUsing'
import { CopyIcon } from '../../assets/icons/copy'
import {
  codeAITypesData,
  codeAITypesMap,
  parseExplainCode
} from '../../utils/codeAI'
import { completeOpenAI } from '../../store/openAI/openAIApi'
import { UserContext } from '../../contexts/userContext'
import { WebStorage } from '../../utils/webStorage'
import { WebStorageNames } from '../../utils/Constants'
import ImgWithText from '../common/img-with-text/ImgWithText'
import CodingForm from './CodingForm'

const ExplainCodeTabs = ({ activeTabKey, setActiveTabKey, aiType }) => {
  const { TabPane } = Tabs
  const { inputCard, outputCard, exampleData } =
    codeAITypesData[codeAITypesMap[aiType]]

  const [isSubmit, setIsSubmit] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [outputData, setOutputData] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [loadExampleData, setLoadExampleData] = useState(false)
  const [timerValue, setTimerValue] = useState(0)
  const [, setUserContext] = useContext(UserContext)

  const onSubmitCodeAI = async ({
    languageName,
    languageSelect,
    secondLanguageName,
    codeEditor
  }) => {
    try {
      setOutputData('')
      setIsSubmit(true)
      const { data } = await completeOpenAI({
        aiType: codeAITypesMap[aiType],
        language: languageName || languageSelect,
        text: codeEditor,
        secondLanguage: secondLanguageName
      })
      let outputData = data.choices && data.choices[0].text
      if (codeAITypesMap[aiType] === 'explainCode') {
        outputData = parseExplainCode(outputData)
      }
      setUserContext((oldValues) => ({
        ...oldValues,
        ...data.user,
        credits: data.credits
      }))
      const user = WebStorage.getLocalUserInfo()
      WebStorage.setLocalStore(WebStorageNames.UserInfo, {
        ...user,
        credits: data.credits
      })
      setOutputData(outputData)
      runTimer()
    } catch (error) {
      setIsSubmit(false)
      notification.error({
        message: 'An error occurred! Please try again later.'
      })
    }
  }

  const runTimer = () => {
    let tValue = 10
    const interval = setInterval(() => {
      tValue -= 1
      if (tValue < 1) {
        clearInterval(interval)
      }
      setTimerValue(tValue)
      setIsSubmit(false)
    }, 1000)
  }

  useEffect(() => {
    if (loadExampleData) {
      document
        .getElementsByClassName('ant-tabs-tab')[0]
        .classList.remove('ant-tabs-tab-active')
      document
        .getElementsByClassName('ant-tabs-tab')[1]
        .classList.add('ant-tabs-tab-active')
      setOutputData('')
      setFormValues({ languageName: ' ', codeText: '' })
      setIsSubmit(true)
      setTimeout(() => {
        setFormValues({
          ...formValues,
          languageName: exampleData.languageName,
          languageSelect: exampleData.languageSelect
        })
        setTimeout(
          () =>
            setFormValues({
              ...formValues,
              languageName: exampleData.languageName,
              languageSelect: exampleData.languageSelect,
              secondLanguageName: exampleData.secondLanguageName,
              codeText: exampleData.codeText
            }),
          500
        )
        setTimeout(() => {
          setIsSubmit(false)
          let outputData = exampleData.output
          if (codeAITypesMap[aiType] === 'explainCode') {
            outputData = parseExplainCode(outputData)
          }
          setOutputData(outputData)
          document
            .getElementsByClassName('ant-tabs-tab')[0]
            .classList.add('ant-tabs-tab-active')
          document
            .getElementsByClassName('ant-tabs-tab')[1]
            .classList.remove('ant-tabs-tab-active')
        }, 1000)
      }, 500)
      setTimeout(() => setLoadExampleData(false), 2000)
    }
  }, [loadExampleData])

  const changeTab = (activeKey) => {
    if (activeKey === '2') {
      setLoadExampleData(true)
    }
  }

  const renderStartUsingHeading = () => {
    return (
      <p>
        <StartUsingIcon />
        Start Using
      </p>
    )
  }

  const renderExampleHeading = () => {
    return (
      <p>
        <ExampleIcon />
        Example
      </p>
    )
  }

  const bottomIcons = () => {
    const onClickCopyIcon = () => {
      if (outputData || (activeTabKey === '2' && exampleData.output)) {
        setIsCopied(true)
        navigator.clipboard.writeText(outputData || exampleData.output)
        setTimeout(() => setIsCopied(false), 2000)
      }
    }
    return (
      <div className="card-bottom">
        <div className="copy-btn">
          <button onClick={onClickCopyIcon}>
            <CopyIcon />
          </button>
          {isCopied && (
            <span style={{ fontSize: '12px', color: 'red' }}>
              {' '}
              Copied to clipboard!{' '}
            </span>
          )}
        </div>

        <div className="copy-btn">
          <button>
            <ExampleIcon />
          </button>
        </div>
      </div>
    )
  }

  const tabSectionOne = () => {
    return (
      <TabPane tab={renderStartUsingHeading()} key="1">
        <div className="tabs-body-wrapper">
          <div className="left-side inner-wrapper">
            <div className="content-wrapper">
              <ImgWithText
                imgUrl="/images/tick.png"
                heading={inputCard.heading}
                subHeading={inputCard.subHeading}
              />
              <CodingForm
                inputCard={inputCard}
                onSubmitCodeAI={onSubmitCodeAI}
                setIsSubmit={setIsSubmit}
                isSubmit={isSubmit}
                formValues={formValues}
                timerValue={timerValue}
                loadExampleData={loadExampleData}
              />
            </div>
          </div>

          <div className="right-side inner-wrapper">
            <div>
              <ImgWithText
                imgUrl="/images/angle-right.png"
                heading={outputCard.heading}
                subHeading={outputCard.subHeading}
                iconwithColor={true}
                backColor="#000"
              />
              <div className="detail">
                {aiType === 'explain-code' &&
                  Array.isArray(outputData) &&
                  outputData.map((value, index) => (
                    <ImgWithText
                      key={`code${index}`}
                      imgUrl="/images/angle-right-black.png"
                      subHeading={value}
                      iconwithColor={true}
                      backColor="#DBDBDB"
                    />
                  ))}
                {aiType !== 'explain-code' && (
                  <AceEditor
                    onLoad={(editor) => {
                      editor.renderer.$cursorLayer.element.style.display =
                        'none'
                    }}
                    mode="javascript"
                    theme="textmate"
                    value={
                      outputData &&
                      outputData.replaceAll('&lt;', '<').replaceAll('&gt;', '>')
                    }
                    name="codeTextOutput"
                    editorProps={{ $blockScrolling: true }}
                    fontSize={16}
                    showPrintMargin={false}
                    showGutter={false}
                    highlightActiveLine={false}
                    width="100%"
                    height="100%"
                    minLines={3}
                    maxLines={20}
                    wrapEnabled={true}
                    setOptions={{
                      enableBasicAutocompletion: false,
                      enableLiveAutocompletion: false,
                      enableSnippets: false,
                      showLineNumbers: false,
                      tabSize: 2,
                      readOnly: true
                    }}
                  />
                )}
              </div>
            </div>
            {bottomIcons && bottomIcons()}
          </div>
        </div>
      </TabPane>
    )
  }

  const tabSectionTwo = () => {
    return <TabPane tab={renderExampleHeading()} key="2"></TabPane>
  }

  const renderTabsSection = () => {
    return (
      <Tabs defaultActiveKey="1" activeKey={activeTabKey} onChange={changeTab}>
        {tabSectionOne && tabSectionOne()}
        {tabSectionTwo && tabSectionTwo()}
      </Tabs>
    )
  }

  return (
    <>
      <div className="main-tabs">
        {renderTabsSection && renderTabsSection()}
      </div>
    </>
  )
}

export default ExplainCodeTabs
