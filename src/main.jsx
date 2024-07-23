import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Store from './Redux/Store.jsx'
import {Provider} from 'react-redux'


render(
    <Provider store={Store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    ,document.getElementById('app'))
