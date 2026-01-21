import axios from 'axios'
import { Routes,Route } from 'react-router';
import { useState } from 'react';
import { HomePage } from './pages/home/HomePage';
import './pages/home/HomePage.css'

import { CheckoutPage } from './pages/checkout/CheckoutPage'

import { OrdersPage } from './pages/orders/OrdersPage'
import { useEffect } from 'react'


function App() {
  const [cart,setCart] = useState([])

  const loadCart= async()=>{
      const response=await axios.get('/api/cart-items?expand=product') 
     /*This is a query parameter,It let us add additional info/parameter to our request
      This is used cart doesn't have details about product,so to add product details to cart we used that expand
     */
      setCart(response.data)
    }
    // Written the async function outside bcs whenever add to cart button is clicked we have to refresh the page to check the quantity and cart updated items,For automatic reloading we have written this outside
  useEffect(()=>{
    loadCart() 
  },[])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>}/> 
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>}></Route>
      <Route path="/orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>}/>
    </Routes>
  )
}

export default App
