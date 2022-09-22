import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './components/Store/redux'

const str = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={str}>
        <App />
    </Provider>

)
