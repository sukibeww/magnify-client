import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './form'
import { PaymentTwoTone } from '@material-ui/icons'

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <Elements>
          <div className="box">
            <PaymentTwoTone />
            <CheckoutForm />
          </div>
        </Elements>
      </StripeProvider>
    )
  }
}

export default Stripe
