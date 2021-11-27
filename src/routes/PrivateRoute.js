import React, { useContext, Suspense, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import { getUser } from '../store/user/UserApis'

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const [userContext, setUserContext] = useContext(UserContext)
  const loggedInUser = userContext || user

  useEffect(() => {
    getUser()
      .then(({ data }) => {
        setUserContext((oldValues) => ({
          ...oldValues,
          credits: data.credits || oldValues.credits
        }))
      })
      .catch((e) => console.log('Error', e))
  }, [])

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<h1>Loading...</h1>}>
          {loggedInUser.token && loggedInUser.isEmailVerified && (
            <Component {...props} />
          )}
          {loggedInUser.token && !loggedInUser.isEmailVerified && (
            <Redirect to={'/verify-email'} />
          )}
          {!loggedInUser.token && <Redirect to={'/login'} />}
        </Suspense>
      )}
    />
  )
}

export default PrivateRoute
