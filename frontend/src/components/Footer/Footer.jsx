import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} />
                <p>Duis eu dolor officia consectetur cillum consequat fugiat. Qui nostrud adipisicing exercitation anim culpa magna nulla. Ullamco adipisicing commodo deserunt cupidatat. Quis id minim nisi non quis ex nostrud adipisicing elit excepteur. Et velit do sunt irure laboris nostrud deserunt minim id sit tempor.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+234-814-495-9369</li>
                    <li>adenijialiuadeyemi@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
		<p className='footer-copyright'>
            Copyright &copy; mealdispatch.com - All rights reserved.
        </p>
    </div>
  )
}

export default Footer