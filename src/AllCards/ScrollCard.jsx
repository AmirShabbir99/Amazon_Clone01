import React from 'react'
import './ScrollCard.css'
import ImgData from '../ImgData.jsx'

import { Link } from 'react-router-dom'

const ScrollCard = () => {
  return (
    <>
    <div className="scroll-card">
    <h3 className='scroll-card-heading'>Today Deals</h3>
    <Link to='/scrolldata' className="scroll-card-link">
    
    {
        ImgData.map((item)=>{
            return(
            <div className="scroll-card-print">
            <img src={item.img1}
            alt="NO" />
            <div className="scroll-card-data">{item.detail}</div>
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