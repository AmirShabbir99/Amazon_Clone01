import React from 'react'
import './PC.css'
import ProductCard from '../ProductCard'

const PC = () => {
  return (
    <>
    <div className="PC">
    <ProductCard 
    id='21'
  img='https://m.media-amazon.com/images/I/71RqiDQR8NL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.9'
  detail='MSI Aegis R Gaming Desktop: Intel Core i7-14700F, Geforce RTX 4070 Super, 16GB DDR5, 1TB m.2 NVMe SSD,'
  price='89'
  />
   <ProductCard 
  id='22'
  img='https://m.media-amazon.com/images/I/61vqI0vw94L._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Microsoft Surface Laptop Studio 2 (2023) - 14.4" Touchscreen - Intel Core i7, 16GB RAM, 512GB SSD'
  price='99'
  />
  <ProductCard 
  id='23'
  img='https://m.media-amazon.com/images/I/51RnDGe-BAL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='MSI Aegis ZS2 Gaming Desktop: AMD Ryzen R9-7900, Geforce RTX 4080 Super, 32GB DDR5,'
  price='65'
  />

<ProductCard 
  id='24'
  img='https://m.media-amazon.com/images/I/71I6iynSnvL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='HP Chromebook X360 14b 14/inch HD 2-in-1 Touchscreen(Intel Celeron N4500,4GB RAM'
  price='65'
  />

  <ProductCard 
  id='25'
  img='https://m.media-amazon.com/images/I/71I6iynSnvL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='HP Chromebook X360 14b 14/inch HD 2-in-1 Touchscreen(Intel Celeron N4500,4GB RAM'
  price='65'
  />



    </div>
    
    </>
  )
}

export default PC