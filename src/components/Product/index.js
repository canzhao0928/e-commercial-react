import React, { Component } from 'react'

class Product extends Component {
  render() {
    const { pName, pText, pPrice } = this.props
    return (
      <div className="grid grid-cols-1 border-solid border-2 rounded-md p-4 hover:scale-110">
        <h1 className="font-bold">{pName}</h1>
        <p>{pText}</p>
        <h2 className="font-bold">${pPrice}</h2>
      </div>
    )
  }
}

export default Product
