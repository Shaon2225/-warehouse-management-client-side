import React from 'react'
import SellsUpdate from '../statis/SellsUpdate'
import Banner from './Banner'
import './Home.css'
import Service from './Service'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Service></Service>
        <SellsUpdate></SellsUpdate>
    </div>
  )
}

export default Home