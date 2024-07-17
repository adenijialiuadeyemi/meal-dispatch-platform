import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { StoreContext } from '../../context/StoreContext.jsx'
const Navbar = ({setShowLogin}) => {

   const [menu, setMenu] = useState("home")
   const navigate = useNavigate()

   const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} onClick={()=>navigate("/")}/>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?'active':''}>Home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?'active':''}>Menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?'active':''}>Mobile-App</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?'active':''}>Contact Us</a>
        </ul>
        <div className='nav-right'>
            <img src={assets.search_icon} />
            <div className='cart-icon'>
                <img src={assets.basket_icon} onClick={()=>navigate('/cart')} />
                <div className={getTotalCartAmount()>0?'dot':''}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar