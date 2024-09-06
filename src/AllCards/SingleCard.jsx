import React from 'react'
import './SingleCard.css'
import { Link } from 'react-router-dom'

const SingleCard = ({heading,img1,title1}) => {
  return (
    <>
    <div className="single-card">
        <h3>{heading}</h3>
        <Link to='/onecard' className="single-card-link">
       <img className='cimg1' src={img1}
        alt="" />
    <div className="single-card-name">{title1}</div>
        </Link>
    </div>
    </>
  )
}

export default SingleCard