import { notification } from 'antd'
import queryString from 'query-string'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserContext } from '../../../contexts/userContext'
import {
  sendVerificationEmail,
  verifyEmail
} from '../../../store/auth/AuthApis'
import { WebStorage } from '../../../utils/webStorage'
import { WebStorageNames } from '../../../utils/Constants'
import './ConfirmEmail.scss'
import ConfirmEmailStatic from './ConfirmEmailStatic'

function VerifyEmail() {
  const [userContext, setUserContext] = useContext(UserContext)
  const { search } = useLocation()
  const { push } = useHistory()
  const { token } = queryString.parse(search)
  const [isEmailVerified, setIsEmailVerified] = useState(false)

  if (!userContext.token) {
    push('/')
    return false
  }

  const verifyUserEmail = async () => {
    try {
      await verifyEmail(token)
      setIsEmailVerified(true)
      const user = WebStorage.getLocalUserInfo()
      WebStorage.setLocalStore(WebStorageNames.UserInfo, {
        ...user,
        isEmailVerified: true
      })
      setUserContext((oldValues) => ({ ...oldValues, isEmailVerified: true }))
    } catch (error) {
      setIsEmailVerified(false)
    }
  }

  const resendEmailVerification = async () => {
    try {
      await sendVerificationEmail(userContext.token)
      notification.success({
        message: 'Resent verification email successfully!'
      })
      push('/verify-email')
    } catch (error) {
      notification.error({
        message: 'Could not send verification email. Please try again later.'
      })
    }
  }

  useEffect(() => {
    if (token) {
      verifyUserEmail(token)
    }
  }, [token])
  return (
    <div>
      {token && isEmailVerified && (
        <ConfirmEmailStatic
          confirmEmailImg={false}
          heading="Thank You For The Confirmation"
          subHeading=""
          gmailBtn={false}
          goToHomeBtn={true}
          goToHomeBtnLabel="Homepage"
        />
      )}
      {token && !isEmailVerified && (
        <ConfirmEmailStatic
          confirmEmailImg={true}
          heading=" Email verification unsuccessful "
          subHeading="We are unable to verify email. Please verify your email again."
          gmailBtn={false}
          customBtn={true}
          customBtnLabel="Resend Email"
          onClickCustomBtn={resendEmailVerification}
          goToHomeBtn={true}
          goToHomeBtnLabel="Change Email"
        />
      )}
      {!token && (
        <ConfirmEmailStatic
          confirmEmailImg={false}
          heading="Confirm your email"
          subHeading="Thanks for signing up, Check your email to verify your email and get started!"
          gmailBtn={true}
          gmailBtnLabel="Open gmail"
          gmailBtnLink="https://mail.google.com/mail/"
          outLookBtn={true}
          outLookBtnLabel="Open outlook"
          outLookBtnLink="https://outlook.live.com/"
        />
      )}
    </div>
  )
}

export default VerifyEmail
