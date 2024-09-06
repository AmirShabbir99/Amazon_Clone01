import React from 'react'
import './NavBanner.css'
import {Link} from 'react-router-dom'

const NavBanner = () => {
  
    const options =[
    { "name": "Today's Deals" } ,
    { "name": "Customer Service"},
    { "name": "Registry"},
    {"name": "Gift Cards"},
    {"name": "Sell"},
    ]
    return (
    <>
    <div className="NavBanner">
    <div className="banner-all">
    <i class="fa-solid fa-bars"></i>
    <p>All</p>
    </div>
        {
            options.map((item)=>{
            return(
                <Link to='/products' className="banner-data">{item.name}</Link> 
            )})
        }
    
    </div>

    
    
    </>
  )
}

export default NavBanner