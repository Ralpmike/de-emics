import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='contact'>
        <h6>Contact</h6>
        <li><FaLocationArrow /> 41, Usifo layout, opposite Ej Fast food,
          2nd Amekpa, Ughelli, Delta State, Nigeria.
        </li>
        <li><FaPhone/> +234 0803 605 6588, 08050684609, 07032776668</li>
        <li><FaMailBulk/>Deemicsgrandhotelltd@gmail.com</li>
        <li><FaFacebook/><FaWhatsapp/><FaInstagram/></li>
      </ul>
      <ul className='links'>

        <h6>Company</h6>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
      <ul className="services">
        <h6>Services</h6>
        <li>Food & restaurant</li>
        <li>Event & Party</li>
        <li>Sit out </li>
      </ul>
    </div>
  )
}

export default Footer