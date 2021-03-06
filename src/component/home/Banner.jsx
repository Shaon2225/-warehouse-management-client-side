import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-text'>
            <h1 className='banner-title'>Today or any day that phone may ring and bring good news.</h1>
            <p className='banner-details'>
                A phone represent your choice your personality. It can enlight your life, bringing world to your pumb of hand.So, make a choice to change your life in a good way. Sometimes it makes you so happy that you can't imagine. 
            </p>
            <Link to={'/manageitem'} className='text-decoration-none nav-route me-3'><button className='inventory-btn'>Go to inventory</button></Link>
        </div>
        <div>
            <img className='banner-img' src="img/banner.png" alt="" />
        </div>
    </div>
  )
}

export default Banner