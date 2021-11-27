import React, { Suspense, useContext, useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import ForgetPassword from '../components/auth/ForgetPassword/ForgetPassword'
import NewPassword from '../components/auth/NewPassword/NewPassword'
import SignIn from '../components/auth/SignIn/index'
import VerifyEmail from '../components/auth/VerifyEmail/VerifyEmail'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/Header/Header'
import Loader from '../components/common/Loader/Loader'
import ExplainCode from '../components/ExplainCode/ExplainCode'
import ContactUs from '../components/staticPages/ContactUs/ContactUs'
import Feature from '../components/staticPages/feature/Feature'
import Home from '../components/staticPages/Home/Home'
import NotFound from '../components/staticPages/NotFound/NotFound'
import Pricing from '../components/staticPages/Pricing/Pricing'
import PrivacyPolicy from '../components/staticPages/PrivacyPolicy/PrivacyPolicy'
import { UserContext } from '../contexts/userContext'
import { WebStorage } from '../utils/webStorage'
import ParentForm from '../components/common/CheckoutForm/ParentForm'
import Learn from '../components/common/Learning/Learn'
import history from './History'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  const [, setUserContext] = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loggedUser = WebStorage.getLocalUserInfo()
  const loggedAuthInfo = WebStorage.getLocalAuthInfo()
  useEffect(() => {
    if (loggedUser && loggedAuthInfo) {
      setUserContext((oldValues) => ({
        ...oldValues,
        ...loggedUser,
        token: loggedAuthInfo.accessToken
      }))
      setIsLoggedIn(true)
    }
    setLoading(false)
  }, [])

  return (
    <>
      {!loading && (
        <Suspense fallback={<Loader />}>
          <Router history={history}>
            <Header />
            <Switch>
              <Home exact path="/" />
              <PrivateRoute
                exact
                path="/code-ai/:aiType"
                component={ExplainCode}
                isLoggedIn
              />
              <Route
                path="/login"
                exact
                render={(props) =>
                  isLoggedIn ? (
                    <Redirect to="/" />
                  ) : (
                    <SignIn showSignIn={true} {...props} />
                  )
                }
              />
              <Route
                path="/register"
                exact
                render={(props) =>
                  isLoggedIn ? (
                    <Redirect to="/" />
                  ) : (
                    <SignIn showSignIn={false} {...props} />
                  )
                }
              />
              <VerifyEmail path="/verify-email" exact />
              <ForgetPassword path="/forget-password" exact />
              <NewPassword path="/reset-password" exact />
              <ContactUs path="/contact-us" exact />
              <PrivacyPolicy path="/privacy-policy" exact />
              <Feature path="/feature" exact />
              <Pricing path="/pricing" exact />
              <ParentForm path="/checkout" exact />
              <Learn path="/learn" exact />
              <NotFound path="*" />
            </Switch>
            <Footer />
          </Router>
        </Suspense>
      )}
    </>
  )
}

export default AppRouter
