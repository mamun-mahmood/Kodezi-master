import { notification } from 'antd'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { axiosInstance } from '../../../network/apis'

const FooterNewsLetter = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
  })

  return (
    <div className="newsLetter-wrapper">
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log('newsletter', values)
          const { data } = await axiosInstance.post(
            '/v1/users/newsletter/signup',
            values
          )
          if (data) {
            notification.success({
              message: 'Successfully subcribed for newsletter!'
            })
            resetForm()
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <p className="form-confrm">Sign up - Newsletter</p>
            <div className="form-field">
              <Field name="email" type="email" placeholder="Your email" />
              <button type="submit">Send</button>
            </div>
            {errors.email && touched.email ? (
              <p className="error-msg">{errors.email}</p>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FooterNewsLetter
