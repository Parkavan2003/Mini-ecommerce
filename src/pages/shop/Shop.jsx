import React from 'react'
import { Products } from '../../Products'
import Product from './Product'
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Today's Top Deals</h1>
        </div>
        <div className="products">
            {Products.map((product)=> (
                <Product
                key={product.id}
                data = {product}
                />
            )
                
            )}
        </div>
    </div>
  )
}

export default Shop