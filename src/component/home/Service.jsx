import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Servicecart from './Servicecart'

const Service = () => {
    const [service, setService]=useState([]);

    useEffect(()=>{
        fetch('https://fast-tor-50406.herokuapp.com/devices')
        .then(res=> res.json())
        .then(data => setService(data))
    },[])

  return (
    <div>
        <h1 className='title'>Our Products</h1>
        <div className='service-container'>
            {
                service.slice(0,6).map(e => <Servicecart key={e._id} el={e}></Servicecart>)
            }
        </div>
        <div className=''>
        <Link to={'/manageitem'} className='text-decoration-none nav-route mange-btn'><button className='inventory-btn mx-auto'>Mange inventory</button></Link>
        </div>
    </div>
  )
}

export default Service