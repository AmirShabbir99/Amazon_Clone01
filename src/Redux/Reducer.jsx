import {    ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART} from './ActionType'

const initialState={
    item:[]
};

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                item:[...state.item,action.payload]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                item:state.item.filter((value)=>value.id!==action.payload)
            }
        case UPDATE_CART_QUANTITY:
            return{
                ...state,
                item:state.item.map(item=>
                item.id===action.payload.itemId ? {...item,quantity:action.payload.quantity}:item
            )
            }
        case CLEAR_CART:
            return{
                ...state,
                item:[]
            }
            default:
            return state;
    }
}


export default cartReducer;