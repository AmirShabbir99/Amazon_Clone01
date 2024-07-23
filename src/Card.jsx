import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({heading,img1,img2,img3,img4,title1,title2,title3,title4}) => {
  return (
    <>
    <div className="card-all">
    <div className="card-full">
    <h3> {heading}</h3>
    <Link to='/game' className="card">
     <div className="card1"> 
      
      <div  className="data">
      <img className='cimg' src={img1}
       alt="headsets" />
       <div className="name">{title1}</div>
       </div>

       <div className="data">
       <img className='cimg' src={img2}
        alt="" />
      <div className="name">{title2}</div>    
    </div>
    </div>

    <div className="card2">
    
    <div className="dat
    ] m cfxa">
       <img className='cimg' src={img3}
        alt="" />
<div className="name">{title3}</div>
</div>

<div className="data">

        <img className='cimg' src={img4} alt="" />
<div className="name">{title4}</div>
</div>
    </div>
    </Link>
    </div>
    </div>
    </>
  )
}

export default Card