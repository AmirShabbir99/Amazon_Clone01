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
    <div className="NavBar">
      <div className="nav-divide-one">

      <Link  to='/' className="nav-amazonlogo">
    <img src={img1} alt="Amazon Logo" height='50' width='110' />
    </Link>

    <Link to='/location' className="nav-location">
    <i  className="fa-solid fa-location-dot"></i>
    Lahore,Pakistan
    </Link>

    <div className="nav-searchbar">
      <div className="nav-arrow">
      <i className="fa-solid fa-caret-down"></i>
      <p>All</p>
      </div>

      <div className="nav-search">
        <input type="text" placeholder='Enter Product Name'/>
      </div>

      <div className="nav-magnifier">
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
    </div>

  <div className="nav-divide-two">
  
    <div className="nav-rightside">
      <img src={img2} alt="flag" height='20px' width='20px' />
      <p>Eng</p>
    <i className="fa-solid fa-caret-down"></i>
    </div>
  
    <div className="nav-userlogo">
      Hello,User
      <p>Accounts & Lists</p>
    </div>
  
    <div className="nav-returnname">
      <p>Return & </p>
      Order
    </div>
  
    <Link to='/cart' className="nav-cart">
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