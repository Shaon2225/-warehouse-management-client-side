import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Servicecart from '../home/Servicecart'

const Myorder = () => {
    const [order,setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        const xyz = async()=>{
        await fetch(`https://fast-tor-50406.herokuapp.com/yourorder?email=${user.email}`)
        .then(res => res.json())
        .then(data=>setOrder(data))
        }
        xyz();
    },[])

  return (
    <div className='container'>
        <h1 className='title mt-5'>Your orders</h1>
        <div className='service-container'>
        {
            order.map(ele=> <Servicecart key={order._id} el={ele}></Servicecart>)
        }
        </div>
    </div>
  )
}

export default Myorder