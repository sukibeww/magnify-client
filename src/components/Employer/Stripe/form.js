import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { Button } from '@material-ui/core'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    if (true) this.setState({ complete: true })
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      <div>
        <p>Become Premium Magnify User. subscribe just for 5$ a month</p>
        <CardElement required={true} />
        <Button
          style={{ margin: '20px' }}
          variant="contained"
          color="secondary"
          size="medium"
          onClick={this.submit}
        >
          Subscribe
        </Button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
