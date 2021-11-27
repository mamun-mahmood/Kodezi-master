import React from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import MyCheckoutForm from '../CheckoutForm/CheckoutForm'

const stripePromise = loadStripe(
  'pk_test_51Jd0VFHRtyaarehWAxCKau3qrHQZdTMzrMeEV5XqjClpBgeri9Sd4gj5odY07oC2QQXFh5rbHvYQXuY8NB3CArHL009rKAdei7'
)

const ParentForm = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <MyCheckoutForm />
      </Elements>
    </>
  )
}

export default ParentForm
