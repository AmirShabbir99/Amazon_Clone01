import React from 'react'
import './Products.css'
import ProductCard from './ProductCard.jsx'

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
  id='1'
  img='https://m.media-amazon.com/images/I/51h3oOo7XnL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD'
  price='289'
  />
  
  <ProductCard 
  id='2'
  img='https://m.media-amazon.com/images/I/51h3oOo7XnL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD'
  price='289'
  />

  <ProductCard 
  id='3'
  img='https://m.media-amazon.com/images/I/51h3oOo7XnL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD'
  price='303'
  />

<ProductCard 
  id='4'
  img='https://m.media-amazon.com/images/I/51h3oOo7XnL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD'
  price='303'
  />
  <ProductCard 
  id='5'
  img='https://m.media-amazon.com/images/I/51h3oOo7XnL._AC_UY327_FMwebp_QL65_.jpg'
  rating='4.6'
  detail='Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD'
  price='303'
  />


</div>
    </div>
    </div>
    
    </>
  )
}

export default Products