import {createStore,combineReducers} from 'redux'
import cartReducer from './Reducer.jsx'

const rootReducer=combineReducers({
    cart:cartReducer
})

const store=createStore(rootReducer)

export default store;

