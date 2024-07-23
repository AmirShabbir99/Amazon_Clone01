import React from 'react'
import './app.css'
import NavBanner from './NavBanner'
import Nav from './Nav'
import HomeScreen from './Home/HomeScreen.jsx'
import ScrollCard  from './ScrollCard.jsx'
import Products from './Products.jsx'
import Footer from './Home/Footer.jsx'
import ProductCard from './ProductCard.jsx'
import Cart from './Cart.jsx'
import Location from './Location.jsx'
import Game from './FourCard/Game.jsx'
import PC from './FourCard/PC.jsx'
import ScrollData from './FourCard/ScrollData.jsx'
import {Route,Routes} from 'react-router-dom'



export function App() {
  
  return (
    <>
    <Nav></Nav>
    <NavBanner></NavBanner>
    <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/location' element={<Location/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
      <Route path='/pc' element={<PC/>}></Route>
      <Route path='/scrolldata' element={<ScrollData/>}></Route>
      </Routes>
    
    {/* <ProductCard/> */}

     {/* <Products></Products> */}
    {/* <HomeScreen></HomeScreen>
    <ScrollCard></ScrollCard>
    <Footer></Footer> */}
    </>
   )
}
