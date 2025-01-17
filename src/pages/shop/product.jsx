import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
export const Product = (props) => {
  const{id,title,price,description,category,image} = props.data
  const {addToCart, cartItems}=useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="description">
        <p><b>{title}</b></p>
        <p>{description}</p>
        <h1>{price} $</h1>
      </div>
      <button className="addToCartBttn" onClick={()=>addToCart(id)}> 
        Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}
