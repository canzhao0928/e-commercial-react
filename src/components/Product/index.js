import { Component } from 'react'
import { Grid } from '@mui/material'

class Product extends Component {
  render() {
    const { pName, pText, pPrice } = this.props
    return (
      <Grid item xs={3}>
        <h1>{pName}</h1>
        <p>{pText}</p>
        <h2>${pPrice}</h2>
      </Grid>
    )
  }
}

export default Product
