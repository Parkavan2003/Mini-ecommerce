import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';


const Product = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
       <div className="product">
        <img src={productImage} alt='product_image'/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        
        <button className='addToCartBtn' onClick={() => addToCart(id)} title="Add to cart">Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        
       </div>
  )
}

export default Product;