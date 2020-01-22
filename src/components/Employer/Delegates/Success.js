import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

class Success extends Component {
  render() {
    if (this.props.location.state) {
      return (
        <>
          <div className="box">
            <h1>Email Send</h1>
            <p>
              {this.props.location.state.email
                ? `Succesfully send Email to ${[
                    ...this.props.location.state.email
                  ]}`
                : 404}
            </p>
            <Link to="/delegates">
              <Button>To Delegate</Button>
            </Link>
          </div>
        </>
      )
    } else return <Redirect to="/" />
  }
}

export default Success
