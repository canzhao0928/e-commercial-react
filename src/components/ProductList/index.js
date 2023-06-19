import React, { Component } from 'react'
import Product from '../Product'

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
    products.map(product =>
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
    products.map(product =>
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
    products.map(product =>
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
    products.map(product => (product.show = true))
    this.setState({
      products: products,
    })
  }

  // search for text box， not Case Sensitive
  search = e => {
    const products = this.state.products
    products.map(product =>
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
  sortByPrice = e => {
    const products = this.state.products
    e.target.value === '1'
      ? products.sort((a, b) => b.price - a.price)
      : products.sort((a, b) => a.price - b.price)
    this.setState({ sort: e.target.value, products: products })
  }

  render() {
    return (
      <div>
        <nav className="shadow-lg w-full p-5">
          <span className="flex block justify-between">
            <div className=" ml-10 flex items-baseline space-x-4">
              <a
                href="#Home"
                className="cursor-pointer text-yellow-600 font-semibold px-3 py-2 text-md hover:font-bold"
                onClick={this.filterAll}
              >
                All products
              </a>
              <a
                href="#About"
                className="cursor-pointer hover:bg-yellow-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={this.filterPantsShirts}
              >
                Pants and skirts
              </a>
              <a
                href="#Services"
                className="cursor-pointer hover:bg-yellow-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={this.filterJackets}
              >
                Jackets
              </a>
              <a
                href="#Services"
                className="cursor-pointer hover:bg-yellow-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={this.filterShirts}
              >
                Shirts
              </a>
            </div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-5 w-5 fill-slate-300"
                  viewBox="0 0 20 20"
                ></svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for products..."
                type="text"
                name="search"
                onChange={this.search}
              />
            </label>
          </span>
        </nav>
        <div className="flex justify-end">
          <div>
            <label
              htmlFor="sort"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sort by price
            </label>
            <select
              id="sort"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={this.state.sort}
              onChange={this.sortByPrice}
            >
              <option value={0}>lowest-to-highest</option>
              <option value={1}>highest-to-lowest</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-5/6 m-auto">
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
        </div>
      </div>
    )
  }
}

export default ProductList
