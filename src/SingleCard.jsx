import React from 'react'
import './SingleCard.css'
import { Link } from 'react-router-dom'

const SingleCard = ({heading,img1,title1}) => {
  return (
    <>
    <div className="SingleCard">
        <h3>{heading}</h3>
        <Link to='/pc' className="SingleCard1">
       <img className='cimg1' src={img1}
        alt="" />
<div className="name1">{title1}</div>
        </Link>
    </div>
    </>
  )
}

export default SingleCard