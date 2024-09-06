import React from 'react'
import './ProductCard.css'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Action'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ProductCard = (props) => {
 
const dispatch = useDispatch();
const cartItem = useSelector((state)=>state.cart.item);
    const handleAddCart=(props)=>{
      toast.success('Successfully Added in cart',{
        position:'bottom-right'
      })
      dispatch(addToCart(props))
    }
  return (
    <>
    <div className="ProductCard">
        <div className="cardp">
            <img className='imgp' src={props.img}
             alt="" />
             <div className="rating"><i class="fa-solid fa-star"></i>{props.rating}</div>  
          <div className="detailP">{props.detail}</div>
<div className="priceP">${props.price}</div>
       <button onClick={()=>handleAddCart(props)} className='btnP'>Add to Cart</button>
       </div>
       <ToastContainer></ToastContainer>
    </div>
    
    
    </>
  )
}

export default ProductCard