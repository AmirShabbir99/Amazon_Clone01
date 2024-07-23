import React from 'react'
import './Nav.css'
import img1 from './Component/amazon-logo.webp'
import img2 from './Component/pak.webp'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


const Nav = () => {

  const cartItem=useSelector(state=>state.cart.item)
  return (
    <>
    <div className="nav">
      <div className="navthree">
      <Link  to='/' className="navbar">
    <img src={img1} alt="Amazon Logo" height='50' width='110' />
    </Link>
    <Link to='/location' className="locationLogo">
    <i  className="fa-solid fa-location-dot"></i>
    Lahore,Pakistan
    </Link>
    <div className="searchbar">
      <div className="arrow">
      <i className="fa-solid fa-caret-down"></i>
      <p>All</p>
      </div>
      <div className="search">
        <input type="text" placeholder='Enter Product Name'/>
      </div>
      <div className="magnifier">
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    </div>
    <div className="navfour">
    <div className="right">
      <img src={img2} alt="flag" height='20px' width='20px' />
      <p>Eng</p>
    <i className="fa-solid fa-caret-down"></i>
    </div>
    <div className="user">
      Hello,User
      <p>Accounts & Lists</p>
    </div>
    <div className="return">
      <p>Return & </p>
      Order
    </div>
    <Link to='/cart' className="cart">
    <p>{cartItem.length}</p>
    <i class="fa-solid fa-cart-shopping"></i>
    Cart
    </Link>
    </div>
    </div>
    </>
  )
}

export default Nav