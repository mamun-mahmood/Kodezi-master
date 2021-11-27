import React from 'react'
import { Link } from 'react-router-dom'
import { FooterData } from '../../data.js'
import './Footer.scss'
import '../../ResponsiveStyle/__footer_responive_style.scss'
import FooterNewsLetter from './FooterNewsLetter'

const Footer = () => {
  const { logo, socialLinks, homeLinks, aboutUsLinks, newsLinks } = FooterData
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container section_container">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <div className="footer-links social-icons">
              {socialLinks &&
                socialLinks.map((links, i) => {
                  const { icon, url } = links
                  return (
                    <a href={url} target="_blank" key={i} rel="noreferrer">
                      <img src={icon} alt="social-icon" />
                    </a>
                  )
                })}
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-links">
              <p className="footer-links-heading">TOS</p>
              {homeLinks &&
                homeLinks.map((links, i) => {
                  const { label, url } = links
                  return (
                    <Link to={url} key={i}>
                      {label}
                    </Link>
                  )
                })}
            </div>
            <div className="footer-links">
              <p className="footer-links-heading">About Us</p>
              {aboutUsLinks &&
                aboutUsLinks.map((links, i) => {
                  const { label, url } = links
                  return (
                    <a href={url} key={i} className="footer_emails">
                      {label}
                    </a>
                  )
                })}
            </div>
            <div className="footer-links">
              <p className="footer-links-heading">Navigate</p>
              {newsLinks &&
                newsLinks.map((links, i) => {
                  const { label, url } = links
                  return (
                    <Link to={url} key={i}>
                      {label}
                    </Link>
                  )
                })}
            </div>
          </div>
          <FooterNewsLetter />
        </div>
      </div>
      <div className="footer-copyright">© 2021 Kodezi</div>
    </>
  )
}

export default Footer
