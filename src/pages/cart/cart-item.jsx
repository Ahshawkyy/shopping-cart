import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
export const CartItem = (props) => {
  const{id,title,price,description,category,image} = props.data
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className="cartItem">
      <img src={image} alt="" />
      <div className="description">
        <p><b>{title}</b></p>
        <p>{description}</p>
        <h1>{price} $</h1>
        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input style={{textAlign:"center"}} value ={cartItems[id]} 
          onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}
