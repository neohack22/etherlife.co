
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from './Footer'
import Jumbotron from './Jumbotron'
import Home from './Home'
import Connect from './Connect'
import Contracts from './Contracts'

const Header = () => (
  <div className="full">
    <div className="container" >
      <Home />
    </div>
    <Jumbotron />
  </div>
)

const Content = connect(
  state => ({
    publicKey: state.app.publicKey,
    contracts: state.app.contractsList,
  })
)(class extends Component {

  render () {

    const { publicKey, contracts } = this.props

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {!publicKey ? <Connect /> : <Contracts list={contracts} onClick={index => console.log(index)} />}
          </div>
        </div>
      </div>
    )
  }
})

export default () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
)
