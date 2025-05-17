import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
import './pages/PlaceOrder/Placeorder.css';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (

    <>
   {showLogin?<LoginPopup  setShowLogin ={setShowLogin}/> :<> </>}
  <div className="App">
   <Navbar setShowLogin = {setShowLogin}  /> 
   <Routes >
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/placeorder" element={<PlaceOrder/>} />


    </Routes>  
  
    </div>
      <Footer/>
     
    </>
  
  )
}

export default App

