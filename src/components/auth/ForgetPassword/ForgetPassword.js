import { notification } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../../store/auth/AuthApis'
import Container from '../../common/MainContainer/Container'
import './ForgetPassword.scss'
import ForgetPasswordForm from './ForgetPasswordForm'

const ForgetPassword = () => {
  const [success, setSuccess] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const onSubmitForgetPassword = async (data) => {
    try {
      setIsSubmit(true)
      await forgotPassword(data)
      setIsSubmit(false)
      setSuccess(true)
    } catch (error) {
      setIsSubmit(false)
      notification.error({ message: error.response.data.message })
    }
  }
  return (
    <Container className="forget-password-container section_container">
      <div className="forget_passwork_bg_shadow_color"></div>
      <div className="forget_passwork_bg_shadow_color_one"></div>
      <div className="forget_passwork_bg_shadow_color_two"></div>
      <div className="forget-password-wrapper">
        <div className="forget-password-bg-color-left"></div>
        <div className="forget-password-bg-color-right"></div>
        <div className="img">
          <img src="/images/forget-password.png" alt="forget-password-img" />
        </div>
        <p className="heading">
          {success ? 'reset password successful' : 'Reset Password'}
        </p>
        {success && (
          <Link to="/" className="home-page-link">
            Homepage
          </Link>
        )}
        {!success && (
          <div className="form-wrapper ">
            <p className="sub-heading">
              Don’t worry. Type email and we will send a password recovery link
              to your email
            </p>
            <ForgetPasswordForm
              isSubmit={isSubmit}
              onSubmit={onSubmitForgetPassword}
            />
          </div>
        )}
      </div>
    </Container>
  )
}

export default ForgetPassword
