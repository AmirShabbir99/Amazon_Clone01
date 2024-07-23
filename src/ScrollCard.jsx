import React from 'react'
import './ScrollCard.css'
import ImgData from './ImgData.jsx'

import { Link } from 'react-router-dom'

const ScrollCard = () => {
  return (
    <>
    <div className="scroll">
    <h3 className='heading'>Today Deals</h3>
    <Link to='/scrolldata' className="ScrollCard">
    
    {
        ImgData.map((item)=>{
            return(
            <div className="Scroll1">
            <img src={item.img1}
            alt="NO" />
            <div className="data1">{item.detail}</div>
        </div>
            )
        })
    }
        
        
    </Link>
    </div>
    </>
  )
}

export default ScrollCard