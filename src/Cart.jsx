import React,{useState,useEffect} from 'react'
import './Cart.css'
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from './Redux/Action'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

const Cart = () => {
     
    const [data,setdata]=useState([])
const dispatch = useDispatch();
const cartItem = useSelector((state)=>state.cart.item);
let a = 0;
cartItem.map((item)=> {console.log(a) 
    return a=a+Number(item.price) })  

useEffect(()=>{
    setdata(cartItem)
},[cartItem])

const handleRemoveCart=(id)=>{
    toast.error('Successfully Remove from Cart',{
        position:'bottom-right'
      })
    dispatch(removeFromCart(id))
}

  return (
    <>
    <div className="Cart">
        <div className="cart">
            <h3>Shopping Cart</h3>
            <div className="right-cart">
           <div className="total-cart">Total  :  $ {a}</div>
            <Link to='/'>
            <button className='btn2-cart'  >Proceed to buy</button>
            </Link>
        </div>

    {
        cartItem.map((item,i)=>{
            return(
        <div className="left-cart">
        <img className='img-cart' src={item.img}
         alt="" />
         <div className="next-cart">
    <div className="detail-cart">{item.detail}</div>
    <div className="rating-cart"> <i class="fa-solid fa-star"></i>{item.rating}</div>
    <div className="price-cart">${item.price}</div>
    <button className='btn1-cart' onClick={()=>handleRemoveCart(item.id)}>Remove from cart</button>
    </div>
    </div>

        )})
    }
    </div>
    <ToastContainer></ToastContainer>
        </div>

      

    
    </>
  )
}

export default Cart