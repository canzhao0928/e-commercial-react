import { Component } from 'react'
import Product from '../Product'
import {
  Grid,
  Button,
  Stack,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from '@mui/material'

const allProducts = [
  {
    name: 'Leather Jacket',
    category: 'jackets',
    description:
      "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
    show: true,
  },
  {
    name: 'Wool cardigan',
    category: 'jackets',
    description:
      'Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.',
    price: 80,
    show: true,
  },
  {
    name: 'Striped business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this striped shirt.',
    price: 50,
    show: true,
  },
  {
    name: 'Short-sleeved polo shirt',
    category: 'shirts',
    description: 'The best shirt you can get for that business-casual look.',
    price: 30,
    show: true,
  },
  {
    name: 'Plain business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this plain business shirt.',
    price: 50,
    show: true,
  },
  {
    name: 'Suit Jacket',
    category: 'jackets',
    description: 'Wear it with jeans or suit pants, it works with both!',
    price: 120,
    show: true,
  },
  {
    name: 'Suit Trousers',
    category: 'pants',
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
    show: true,
  },
  {
    name: 'Denim Jeans',
    category: 'pants',
    description:
      'A timeless classic, these denim jeans will never go out of style.',
    price: 80,
    show: true,
  },
  {
    name: 'Pencil Skirt',
    category: 'skirts',
    description:
      'A classy work-ready skirt that will make you feel like a million bucks.',
    price: 100,
    show: true,
  },
  {
    name: 'Cotton flowy skirt',
    category: 'skirts',
    description:
      'For those warm summer days when you just need to feel the breeze on your legs.',
    price: 45,
    show: true,
  },
]

class ProductList extends Component {
  state = { products: allProducts, sort: '' }

  //filter all shirts category
  filterShirts = () => {
    const products = this.state.products
    products.map((product) =>
      product.category === 'skirts'
        ? (product.show = true)
        : (product.show = false)
    )
    this.setState({
      products: products,
    })
  }

  //filter all pants and shirts category
  filterPantsShirts = () => {
    const products = this.state.products
    products.map((product) =>
      product.category === 'skirts' || product.category === 'pants'
        ? (product.show = true)
        : (product.show = false)
    )
    this.setState({
      products: products,
    })
  }

  //filter all Jackets category
  filterJackets = () => {
    const products = this.state.products
    products.map((product) =>
      product.category === 'jackets'
        ? (product.show = true)
        : (product.show = false)
    )
    this.setState({
      products: products,
    })
  }

  //filter all category
  filterAll = () => {
    const products = this.state.products
    products.map((product) => (product.show = true))
    this.setState({
      products: products,
    })
  }

  // search for text box， not Case Sensitive
  search = (e) => {
    const products = this.state.products
    products.map((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      product.description.toLowerCase().includes(e.target.value.toLowerCase())
        ? (product.show = true)
        : (product.show = false)
    )
    this.setState({
      products: products,
    })
  }

  //sort by price
  sortByPrice = (e) => {
    const products = this.state.products
    e.target.value
      ? products.sort((a, b) => b.price - a.price)
      : products.sort((a, b) => a.price - b.price)
    this.setState({ sort: e.target.value, products: products })
  }

  render() {
    return (
      <>
        <Stack spacing={2} direction="row">
          <Button onClick={this.filterShirts}>Shirts</Button>
          <Button onClick={this.filterPantsShirts}>Pants and skirts</Button>
          <Button onClick={this.filterJackets}>Jackets</Button>
          <Button onClick={this.filterAll}>All products</Button>
          <input type="text" onChange={this.search} placeholder="Search" />
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <InputLabel id="sort">Sort by price</InputLabel>
            <Select
              labelId="sort"
              value={this.state.sort}
              onChange={this.sortByPrice}
            >
              <MenuItem value={0}>lowest-to-highest</MenuItem>
              <MenuItem value={1}>highest-to-lowest</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Grid container spacing={2}>
          {this.state.products.map((product, index) => {
            return (
              product.show && (
                <Product
                  key={index}
                  pName={product.name}
                  pText={product.description}
                  pPrice={product.price}
                />
              )
            )
          })}
        </Grid>
      </>
    )
  }
}

export default ProductList
