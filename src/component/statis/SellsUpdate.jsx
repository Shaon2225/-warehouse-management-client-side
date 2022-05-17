import React, { useEffect, useState, PureComponent } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const SellsUpdate = () => {
    const [sells,setSells] = useState([]);
    // https://fast-tor-50406.herokuapp.com
    // http://localhost:5000
    useEffect(()=>{
        const xyz = async()=>{
         await fetch('https://fast-tor-50406.herokuapp.com/sellsupdate')
        .then(res => res.json())
        .then(data => setSells(data))
        }
        xyz();
    },[])

  return (
    <div>
        <h1 className='title my-5'>Sells update</h1>
        <div>
        <BarChart
          width={500}
          height={300}
          data={sells}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
        </BarChart>
        </div>
    </div>
  )
}

export default SellsUpdate