import { notification } from 'antd'
import queryString from 'query-string'
import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { resetPassword } from '../../../store/auth/AuthApis'
import Container from '../../common/MainContainer/Container'
import './NewPassword.scss'
import NewPasswordForm from './NewPasswordForm'

const NewPassword = () => {
  const { search } = useLocation()
  const { push } = useHistory()
  const { token } = queryString.parse(search)
  if (!token) push('/')

  const [isSubmit, setIsSubmit] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmitResetPassword = async (data) => {
    try {
      setIsSubmit(true)
      await resetPassword(token, { password: data.newPassword })
      setIsSubmit(false)
      setSuccess(true)
    } catch (error) {
      setIsSubmit(false)
      notification.error({ message: error.response.data.message })
    }
  }
  return (
    <Container className="new-password-container">
      <div className="new-password-wrapper">
        <div className="forget-password-bg-color-left"></div>
        <div className="forget-password-bg-color-right"></div>
        <div className="img">
          <img src="/images/new-password.png" alt="new-password-img" />
        </div>
        <p className="heading">
          {success ? 'Reset Password Successful' : 'Enter your New Password'}
        </p>
        {success && (
          <Link to="/" className="home-page-link">
            Go home page
          </Link>
        )}
        {!success && (
          <div className="form-wrapper">
            <p className="sub-heading">
              Enter your new password to reset your password. Enter a different
              password from the one you used before
            </p>
            <NewPasswordForm
              isSubmit={isSubmit}
              onSubmit={onSubmitResetPassword}
            />
          </div>
        )}
      </div>
    </Container>
  )
}

export default NewPassword
