import React from 'react'
import './ProductNavBanner.css'
import ProductCard from './AllCards/ProductCard.jsx'

const Products = () => {
 
  return (
    <>
    <div className="product-full">
    <div className="Products">
        <div className="bold">
        <h3>Electronic</h3>
        </div>
        <div className="product">Mobiles & Accessories</div>
        <div className="product">Laptops & Accessories</div>
        <div className="product">TV & Home Entertainment</div>
        <div className="product">Audio</div>
        <div className="product">Cameras</div>
        <div className="product">Computer Peripherals</div>
        <div className="product">Smart Technology</div>
        <div className="product">Musical Instruments</div>
        <div className="product">Office & Stationary</div>
    </div>
   <div className="Product2_0">
    
    <div className="Product2">
        <div className="category">
        <h3>Category</h3>
        </div>
        <div className="product2"> Computers & Accessories</div>
        <div className="product2">Macbook </div>
        <div className="product2"> Amazon Prime</div>
        <div className="product2"> Average Customer Review</div>
        <div className="product2"> </div>
        <div className="product2 sm1"> 
          <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        & UP
        </div>
        <div className="product2 sm1">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        & UP
           </div>
        <div className="product2 sm1"> 
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        & UP
        </div>
        <div className="product2">Amazon Prime </div>
        <div className="product2"> Average Customer Review</div>
        
    </div>
    
<div className="product-card"> 
  <ProductCard 
  id='b1'
  img='https://m.media-amazon.com/images/I/51h3oOo7XnL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD'
  price='289'
  />
  
  <ProductCard 
  id='2'
  img='https://m.media-amazon.com/images/I/51dUyUJSFyL._AC_SY535_.jpg'
  rating='4.6'
  detail='Under Armour men Charged Surge'
  price='125'
  />

<ProductCard 
  id='b3'
  img='https://m.media-amazon.com/images/I/81AyuPhQ0aL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  rating='4.6'
  detail='PELONIS 3-Speed Box Fan For Full-Force Circulation With Air Conditioner'
  price='109'
  />

<ProductCard 
  id='b4'
  img='https://m.media-amazon.com/images/I/91w5FDNyXNL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  rating='4.6'
  detail='Etekcity Smart Scale for Body Weight FSA HSA Store Eligible, '
  price='89'
  />

<ProductCard 
  id='b5'
  img='https://m.media-amazon.com/images/I/71UsjxlGZwL.__AC_SX300_SY300_QL70_FMwebp_.jpg
'
  rating='4.6'
  detail='SAMSUNG 32-Inch ViewFinity S7 (S70D) Series 4K UHD High Resolution Monitor with HDR10,'
  price='179'
  />

<ProductCard 
  id='b6'
  img='https://m.media-amazon.com/images/I/61C3n3bqNRL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  rating='4.6'
  detail='Simple Modern Spiderman Kids Water Bottle with Straw Lid '
  price='25'
  />

<ProductCard 
  id='b7'
  img='https://m.media-amazon.com/images/I/61NJKdXqx5L.__AC_SY300_SX300_QL70_FMwebp_.jpg'
  rating='4.6'
  detail='SAMSUNG Galaxy Watch 6 44mm Bluetooth Smartwatch, Fitness Tracker, Personalized HR Zones,'
  price='69'
  />

<ProductCard 
  id='b8'
  img='https://m.media-amazon.com/images/I/61gJcez9unL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  rating='4.6'
  detail='TP-Link Tapo 1080P Indoor Security Camera for Baby Monitor, Dog Camera w/Motion Detection'
  price='99'
  />

<ProductCard 
  id='b9'
  img='https://m.media-amazon.com/images/I/71AWwyXg6GL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  rating='4.6'
  detail='PetSafe ScoopFree SmartSpin Self-Cleaning Cat Litter Box – Advanced Odor Control'
  price='199'
  />
  <ProductCard 
  id='b10'
  img='https://m.media-amazon.com/images/I/51PvvQkol9L._AC_SY400_.jpg'
  rating='4.6'
  detail='Kanaa gurii kaa Masaraa nîŋa: A history of the Massalit people (French Edition)'
  price='29'
  />
  <ProductCard 
  id='b11'
  img='https://m.media-amazon.com/images/I/81NiP8MImEL._AC_SX679_PIbundle-8,TopRight,0,0_SH20_.jpg'
  rating='4.6'
  detail='Bounty Quick Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls'
  price='49'
  />



</div>
    </div>
    </div>
    
    </>
  )
}

export default Products