import React from 'react'
import ContactUsForm from './ContactUsForm'
import './ContactUs.scss'

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-wrapper">
        <div className="contact-us-wrapper-bg-shadow-color"></div>
        <div className="contact-us-wrapper-bg-shadow-color-one"></div>
        <div className="contact-us-wrapper-bg-shadow-color-two"></div>
        <div className="left-side sub-section">
          <div className="hero-img">
            <img src="/images/contact-us.png" alt="hero-img" />
          </div>
        </div>

        <div className="right-side sub-section">
          <h4 className="contact-us-heading">Contact us</h4>
          <p className="sub-heading">Feel free to get in touch!</p>

          <ContactUsForm />
        </div>
      </div>
    </>
  )
}

export default ContactUs
