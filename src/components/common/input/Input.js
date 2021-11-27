import { useFormikContext } from 'formik'
import React from 'react'

const FloatInput = ({
  name,
  placeholder,
  type,
  value = '',
  checkError = true,
  onChange,
  textLimit = false
}) => {
  const { handleChange, setFieldTouched, errors, touched, values } =
    useFormikContext()

  return (
    <>
      <div className="input-wrapper">
        <input
          // rows="5"
          // col="20"
          value={value || values.name}
          name={name}
          placeholder={placeholder}
          className={
            touched[name] && errors[name] && checkError
              ? 'input-error'
              : 'input-component'
          }
          onBlur={() => setFieldTouched(name)}
          onChange={(name) => {
            handleChange(name)
            onChange && onChange()
          }}
          type={type}
        />
        {textLimit && (
          <p className="character-allow-limit">{value.length}/40 characters</p>
        )}
      </div>
      {touched[name] && errors[name] && (
        <span className="error-msg">{errors[name]}</span>
      )}
    </>
  )
}

export default FloatInput
