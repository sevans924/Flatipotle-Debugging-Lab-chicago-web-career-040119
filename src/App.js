import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  state = {
    orders: []
  }

  addOrder = (order) => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
    console.log(this.state)
  }

  render() {
    const userOrders = () => this.state.orders.map( (order, index) => {
      return <Order key={index} {...order} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { userOrders() }
          </div>
        </div>
      </div>
    )
  }
}

export default App
