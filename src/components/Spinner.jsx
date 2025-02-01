import React, { Component } from 'react'
import loading from './loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img src={loading} alt="Loading" style={{ width: '10vw', height: 'auto' }}/>
      </div>
    )
  }
}   

