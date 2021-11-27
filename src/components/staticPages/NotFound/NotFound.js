import React from 'react'
import { Link } from 'react-router-dom'
// import Container from '../../common/MainContainer/Container'
import './Notfound.scss'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-wrapper">
        <div className="not-found-wrapper-bg-shadow-color"></div>
        <div className="not-found-wrapper-bg-shadow-color-one"></div>
        <div className="img">
          <img src="/images/NotFound.png" alt="not-found" />
        </div>
        <h1 className="not-found-heading">Oops! Page not Found</h1>
        <p className="sub-heading">
          Oh no! You broke our website! Just kidding, the page your are looking
          for may have been removed or never exited!
        </p>
        <div className="not-found-btns">
          <Link to="/">Get Started</Link>
          <Link to="/">Home page</Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound
