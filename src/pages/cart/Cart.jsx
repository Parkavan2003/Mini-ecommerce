import React, { useContext } from 'react'
import './Cart.css'
import { Products } from '../../Products'
import { ShopContext } from '../../context/ShopContext'
import CartItemList from './CartItemList'
import { useNavigate } from 'react-router'


const Cart = () => {

  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) =>{
          if (cartItems[product.id] !== 0){
            return <CartItemList data={product}/>
          }
        }         
      )}
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
      <p className='total'>Total Amount : ${totalAmount.toFixed(2)}</p>
      <div className="btnContainer">
          <button onClick={()=>navigate('/')}>Continue Shopping</button>
          <button >Checkout</button>
      </div>
  </div> : <h1 className='empty'>Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart