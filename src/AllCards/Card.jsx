import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({heading,img1,img2,img3,img4,title1,title2,title3,title4}) => {
  return (
    <>
    <div className="card-four">
    <div className="card-full">
    <h3> {heading}</h3>
    <Link to='/fourcards' className="card">
     <div className="card-top"> 
      
      <div  className="card-data">
      <img className='cimg' src={img1}
       alt="headsets" />
       <div className="card-name">{title1}</div>
       </div>

       <div className="card-data">
       <img className='cimg' src={img2}
        alt="" />
      <div className="card-name">{title2}</div>    
    </div>
    </div>

    <div className="card-bottom">
    
    <div className="card-data">
       <img className='cimg' src={img3}
        alt="" />
<div className="card-name">{title3}</div>
</div>

<div className="card-data">

        <img className='cimg' src={img4} alt="" />
<div className="card-name">{title4}</div>
</div>
    </div>
    </Link>
    </div>
    </div>
    </>
  )
}

export default Card