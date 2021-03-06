import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppRouter from '../src/routes/AppRouter'
import './index.css'
import 'antd/dist/antd.css'
import { UserProvider } from '../src/contexts/userContext'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
