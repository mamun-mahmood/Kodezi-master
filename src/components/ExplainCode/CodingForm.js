import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-textmate'
import { ClockCircleOutlined } from '@ant-design/icons'
import * as Yup from 'yup'
import { CopyIcon } from '../../assets/icons/copy'
import Dropdown from '../common/dropdown/Dropdown'
import FloatInput from '../common/input/Input'

const CodingForm = ({
  inputCard,
  onSubmitCodeAI,
  timerValue,
  isSubmit,
  formValues
}) => {
  const {
    fieldLabel,
    fieldType = 'text',
    fieldPlaceholder = '',
    fieldBottomLabel = '',
    editorLabel = '',
    editorType,
    editorPlaceholder = '',
    editorBottomLabel = '',
    fieldOptions = []
  } = inputCard

  const [languageSelectValue, setLanguageSelectValue] = useState('')

  let codeEditorSchema
  if (fieldType === 'text') {
    codeEditorSchema = Yup.object().shape({
      languageName: Yup.string()
        .min(2, 'Too Short!')
        .max(40, 'Too Long!')
        .required('Required'),
      codeText: Yup.string()
        .min(5, 'Too Short!')
        .max(400, 'Too Long!')
        .required('Required')
    })
  } else {
    codeEditorSchema = Yup.object().shape({
      codeText: Yup.string()
        .min(5, 'Too Short!')
        .max(400, 'Too Long!')
        .required('Required')
    })
  }

  useEffect(() => {
    setLanguageSelectValue(
      formValues.languageSelect ? formValues.languageSelect.value : ''
    )
  }, [formValues.languageSelect])

  return (
    <Formik
      initialValues={{
        languageName: formValues ? formValues.languageName : '',
        secondLanguageName: formValues ? formValues.secondLanguageName : '',
        codeText: formValues && formValues.codeText,
        languageSelect: languageSelectValue || ''
      }}
      validationSchema={codeEditorSchema}
      onSubmit={(values) =>
        onSubmitCodeAI({
          ...values,
          codeEditor: values.codeText,
          languageSelect: languageSelectValue
        })
      }
      enableReinitialize={true}
    >
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form id="ai-form">
            <div className="field-wrapper">
              <p className="label">{fieldLabel}</p>
              {fieldType === 'text' && (
                <>
                  <FloatInput
                    label={fieldLabel}
                    name="languageName"
                    placeholder={fieldPlaceholder}
                    textLimit={true}
                    value={values.languageName}
                  />
                  <p className="bottom-label">{fieldBottomLabel}</p>
                </>
              )}
              {fieldType === 'dropdown' && (
                <>
                  <Dropdown
                    items={fieldOptions}
                    value={languageSelectValue}
                    onChange={(value) => {
                      setLanguageSelectValue(value)
                    }}
                    required={true}
                  />
                </>
              )}
            </div>
            {inputCard.secondFieldType && (
              <div className="field-wrapper">
                <p className="label">{inputCard.secondFieldLabel}</p>
                {inputCard.secondFieldType === 'text' && (
                  <>
                    <FloatInput
                      label={inputCard.secondFieldLabel}
                      name="secondLanguageName"
                      placeholder={inputCard.secondFieldPlaceholder}
                      textLimit={true}
                      value={values.secondLanguageName}
                    />
                    <p className="bottom-label">{fieldBottomLabel}</p>
                  </>
                )}
              </div>
            )}
            <div
              className={`${
                editorType === 'textarea'
                  ? 'field-wrapper input-wrapper'
                  : 'code-editor-wrapper input-wrapper'
              }`}
            >
              <p className="label">{editorLabel}</p>
              {editorType === 'textarea' && (
                <Field
                  className="form__input"
                  name="codeText"
                  as="textarea"
                  placeholder={editorPlaceholder}
                  value={values.codeText}
                />
              )}
              {editorType === 'code' && (
                <AceEditor
                  mode="javascript"
                  theme="textmate"
                  placeholder="function Name(attr){..."
                  value={values.codeText}
                  onChange={(code) => setFieldValue('codeText', code)}
                  name="codeText"
                  editorProps={{ $blockScrolling: true }}
                  fontSize={16}
                  showPrintMargin={false}
                  showGutter={false}
                  highlightActiveLine={false}
                  cursorStart={3}
                  width="100%"
                  height="100%"
                  minLines={3}
                  maxLines={50}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: false,
                    tabSize: 2
                  }}
                  style={{ backgroundColor: '#f5f5f5' }}
                />
              )}
              {errors.codeText && touched.codeText ? (
                <span className="error-msg">{errors.codeText}</span>
              ) : null}
              <p className="character-allow-limit">
                {values && values.codeText ? values.codeText.length : '0'}
                /400 characters
              </p>
              <p className="bottom-label">{editorBottomLabel}</p>
            </div>
            <div className="submit-buttons sign-in profile-buttons">
              <button
                className="submit-btn expline-code-submit-btn"
                type="submit"
                disabled={isSubmit || timerValue}
              >
                {!!timerValue && (
                  <>
                    <ClockCircleOutlined
                      style={{ color: '#fff', marginRight: '10px' }}
                    />{' '}
                    Timeout {timerValue}{' '}
                  </>
                )}
                {!timerValue && (
                  <>
                    <CopyIcon />
                    <p className="explain-code-submit-btn-text">
                      {!isSubmit && 'Enhance'}
                      {isSubmit && 'Enhancing...'}
                    </p>
                  </>
                )}
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CodingForm
