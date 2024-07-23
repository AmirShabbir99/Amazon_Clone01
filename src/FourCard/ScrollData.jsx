import React from 'react'
import './ScrollData.css'
import ProductCard from '../ProductCard'
const ScrollData = () => {
  return (
    <>
        <div className="ScrollData">
        <ProductCard 
  id='11'
  img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg'
  rating='4.9'
  detail='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED '
  price='89'
  />
   <ProductCard 
  id='12'
  img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg'
  rating='4.6'
  detail='Corsair K70 RGB PRO Wired Mechanical Gaming Keyboard'
  price='99'
  />
  <ProductCard 
  id='13'
  img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg'
  rating='4.6'
  detail='ASUS ROG Spatha X Wireless Gaming Mouse (Magnetic Charging Stand, 12 Programmable Buttons, 19,000 DPI, '
  price='65'
  />
  
        </div>
        
    </>
  )
}

export default ScrollData