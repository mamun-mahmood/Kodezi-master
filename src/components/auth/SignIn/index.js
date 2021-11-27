import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { notification } from 'antd'
import { GoogleLogin } from 'react-google-login'
import { SignInData } from '../../data.js'
import { UserContext } from '../../../contexts/userContext'
import { axiosInstance } from '../../../network/apis'
import { WebStorage } from '../../../utils/webStorage'
import { WebStorageNames, GOOGLE_CLIENT_ID } from '../../../utils/Constants'
import './style.scss'
import '../../ResponsiveStyle/__signInForm_responive_style.scss'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const SignIn = (props) => {
  const {
    signUpImg,
    signInImg,
    signUpText,
    subDetail,
    signUpHeading,
    signInHeading,
    subTitle,
    signInText
  } = SignInData

  const [, setUserContext] = useContext(UserContext)
  const [showSignInForm, setShowSignInForm] = useState(!!props.showSignIn)
  const { push } = useHistory()
  const handleForms = () => {
    if (showSignInForm) {
      push('/register')
    } else {
      push('/login')
    }
    setShowSignInForm(!showSignInForm)
  }

  const handleLogin = async (response) => {
    try {
      const { googleId, tokenId } = response
      const { data } = await axiosInstance.post(
        '/v1/auth/google',
        {
          token: tokenId,
          googleId
        },
        {
          'Content-Type': 'application/json'
        }
      )
      if (data) {
        setUserContext((oldValues) => ({
          ...oldValues,
          ...data.user,
          token: data.tokens.access.token
        }))
        WebStorage.setLocalStore(WebStorageNames.UserInfo, data.user)
        WebStorage.setLocalStore(WebStorageNames.AuthInfo, {
          accessToken: data.tokens.access.token,
          refreshToken: data.tokens.refresh.token
        })
        notification.success({ message: 'Signed in successfully!' })
        push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* <Header /> */}
      <div className="sign-in-wrapper">
        {!showSignInForm ? (
          <div className="sign-in-wrapper-left-bg-layout-change"></div>
        ) : (
          <div className="sign-in-wrapper-left-bg-layout"></div>
        )}
        <div className="sign-in-wrapper-right-bg-layout"></div>
        <div
          className={
            !showSignInForm
              ? 'sign-in-wrapper-container section_container'
              : 'sign-in-wrapper-container active section_container'
          }
        >
          <div className="left-side sub-section">
            <div className="hero-img">
              <img
                src={!showSignInForm ? signUpImg : signInImg}
                alt="hero-img"
              />
            </div>
            <h4 className="heading">
              {!showSignInForm ? signUpText : signInText}
            </h4>
            <p className="sub-heading">{subDetail}</p>
            <button className="sign-in-btn" onClick={handleForms}>
              {!showSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          <div className="right-side sub-section">
            <h2 className="heading">
              {!showSignInForm ? signUpHeading : signInHeading}
            </h2>
            {showSignInForm ? undefined : (
              <p className="sub-heading">{subTitle}</p>
            )}
            <div className="google-login-btns">
              <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <button
                    className={
                      !showSignInForm ? 'button buttonActive' : 'button'
                    }
                    onClick={renderProps.onClick}
                  >
                    <img
                      src="./images/flat-color-icons_google.svg"
                      alt="google-icon"
                    />
                    {showSignInForm
                      ? 'Sign in using google'
                      : 'Sign up using google'}
                  </button>
                )}
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
              />
              <button
                className={!showSignInForm ? 'button buttonActive' : 'button'}
                onClick={() => console.log('I am clickend')}
              >
                <img src="./images/twitter.svg" alt="twitter-icon" />
                {showSignInForm
                  ? 'Sign in with Twitter'
                  : 'Sign up with Twitter'}
              </button>
            </div>
            <div className="or-separate">
              <div className="inner-sep"></div>
              <span>or</span>
              <div className="inner-sep"></div>
            </div>

            {showSignInForm ? (
              <SignInForm showSignInForm={showSignInForm} />
            ) : (
              <SignUpForm showSignInForm={showSignInForm} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
