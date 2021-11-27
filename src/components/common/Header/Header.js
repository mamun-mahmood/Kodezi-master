import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../../contexts/userContext'
import { logOutUser } from '../../../store/auth/AuthApis'
import { WebStorage } from '../../../utils/webStorage'
import { NavbarData } from '../../data.js'
import './Header.scss'
import '../../ResponsiveStyle/__header_responive_style.scss'

const Header = () => {
  const { pathname } = useLocation()
  const { logo, navLinks } = NavbarData
  const [userContext] = useContext(UserContext)
  const [color, setColor] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [btnclick, setBtnclick] = useState(true)
  const [active, setActive] = useState([true])
  const [menu, setMenu] = useState(false)

  const activeFun = (index) => {
    const lotAcitve = navLinks.map((item, i) => {
      return index === i
    })
    setActive(lotAcitve)
  }

  const showColor = () => {
    if (window.scrollY >= 10) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showColor)
  }, [])

  useEffect(() => {
    const menuIndex = navLinks.findIndex((link) => link.url === pathname)
    activeFun(menuIndex)
    window.scrollTo(0, 0)
  }, [pathname])

  const onClickLogout = () => {
    logOutUser()
      .then(() => {
        WebStorage.clearUserInfo()
        window.location.href = '/'
      })
      .catch(() => {
        WebStorage.clearUserInfo()
        window.location.href = '/'
      })
  }

  return (
    <>
      <div className={color ? 'navbar-wrapper' : 'navbar-wrapper'}>
        <div className="navbar-container section_container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu_icon" onClick={() => setMenu(!menu)}>
            <img src="/images/menu.svg" alt="menu-icon" />
          </div>
          <div className="nav-links">
            {navLinks &&
              navLinks.map((links, i) => {
                const { label, url } = links
                return (
                  <Link
                    onClick={() => {
                      setBtnclick(true)
                    }}
                    className={active[i] ? 'activeBorder' : null}
                    to={url}
                    key={i}
                  >
                    {label}
                  </Link>
                )
              })}
            {userContext.token && (
              <div className="user_detail_btn">
                <Link to="#" className="user_point">
                  <img src="/images/pricing.svg" />
                  <span style={{ marginLeft: '10px' }}>
                    ${userContext.credits || 0}
                  </span>
                </Link>
                <Link
                  to="#"
                  onClick={() => setActiveUser(!activeUser)}
                  className="user-login"
                >
                  <img src="/images/user.svg" />
                </Link>
                <div className={!activeUser ? 'activeShowBtn' : 'btns_wrapper'}>
                  <button>Subscriptions</button>
                  <button onClick={onClickLogout}>Sign out</button>
                </div>
              </div>
            )}
            {!userContext.token && (
              <>
                <Link
                  to="/register"
                  onClick={() => {
                    setActive([false])
                    setBtnclick(false)
                  }}
                  className={btnclick && !active[0] ? 'activecolors' : null}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        <div className={menu ? 'navbar-links' : 'show_navbar navbar-links'}>
          {navLinks &&
            navLinks.map((links, i) => {
              const { label, url } = links
              return (
                <Link
                  onClick={() => {
                    setBtnclick(true)
                  }}
                  className={active[i] ? 'activeBorder' : null}
                  to={url}
                  key={i}
                >
                  {label}
                </Link>
              )
            })}
          {userContext.token && (
            <div className="user_detail_btn">
              <Link to="#" className="user_point">
                <img src="/images/pricing.svg" />
                <span style={{ marginLeft: '10px' }}>
                  ${userContext.credits || 0}
                </span>
              </Link>
              <Link
                to="#"
                onClick={() => setActiveUser(!activeUser)}
                className="user-login"
              >
                <img src="/images/user.svg" />
              </Link>
              <div className={!activeUser ? 'activeShowBtn' : 'btns_wrapper'}>
                <button>Subscriptions</button>
                <button onClick={onClickLogout}>Sign out</button>
              </div>
            </div>
          )}
          {!userContext.token && (
            <>
              <Link
                to="/register"
                onClick={() => {
                  setActive([false])
                  setBtnclick(false)
                }}
                className={btnclick && !active[0] ? 'activecolors' : null}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
