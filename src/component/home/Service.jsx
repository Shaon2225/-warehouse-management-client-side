import React, { useEffect, useState } from 'react'
import './Home.css'
import Servicecart from './Servicecart'

const Service = () => {
    const [service, setService]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/devices')
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
    </div>
  )
}

export default Service