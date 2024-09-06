import React from 'react'
import './app.css'
import NavBanner from './NavBanner'
import Nav from './Nav'
import HomeScreen from './Home/HomeScreen.jsx'
import Products from './ProductNavBanner.jsx'
import Cart from './Cart.jsx'
import Location from './Location.jsx'
import FourCards from './HomeCardsData/FourCards.jsx'
import OneCard from './HomeCardsData/OneCard.jsx'
import ScrollData from './ScrollData.jsx'
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
      <Route path='/fourcards' element={<FourCards/>}></Route>
      <Route path='/onecard' element={<OneCard/>}></Route>
      <Route path='/scrolldata' element={<ScrollData/>}></Route>
      </Routes>
    </>
   )
}
