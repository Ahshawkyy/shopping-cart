import React from 'react'
import{Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import{} from "../comp/navbar.css"
export const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='txlog'>Your Are In Your Shop</h1>
      <div className="links">
        <Link to = "/"><FontAwesomeIcon icon={faHouse} className='fa-icons'/></Link>
        <Link to = "/cart"><FontAwesomeIcon icon={faCartShopping} className='fa-icons'/></Link>
      </div>
    </div>
  )
}
