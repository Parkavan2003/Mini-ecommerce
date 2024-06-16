import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const CartItemList = (props) => {
    const {id,productImage,price,productName} = props.data;
    const {cartItems,removeFromCart,addToCart,updateCartItemCount} = useContext(ShopContext);
  return (
    
        <div className='cartItem'>
        <div className="prod-image">
            <img src={productImage} alt="product-image" />
        </div>
        <div className="description">
            <p><b>{productName}</b></p>
            <p className='price'>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="number" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
    
    
  )
}

export default CartItemList