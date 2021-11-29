import React from 'react'
import './Pricing.css'
import Container from '../../common/MainContainer/Container'
import { PricingData } from '../../../utils/PricingData'
import PricingCards from '../../common/pricingCards/PricingCards'
import '../../ResponsiveStyle/__pricing_pages_responive_style.scss'
const Pricing = () => {
  const { cards } = PricingData

  return (
    <>
      <Container className="pricing-container">
        <div className="pricing-wrapper">
          <p className="heading-plans">Our plans</p>
          <div className="pricing-bg-color"></div>
          <div className="pricing-bg-color-right"></div>
          <div className="pricing-card-section section_container">
            <PricingCards packages={cards} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pricing
