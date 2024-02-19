import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CreateSlice from './compoenents/CreateSlice.jsx'
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers(
  { result: CreateSlice }

)
const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
)
