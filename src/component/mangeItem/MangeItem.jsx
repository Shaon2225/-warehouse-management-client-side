import React, { useEffect, useState } from 'react'
import './MangeItem.css'
import TableRow from './TableRow';

const MangeItem = () => {
  const [up, setUp] =useState(true);
  const [devices,sethevices] = useState([]);

  useEffect(()=>{
    fetch('https://fast-tor-50406.herokuapp.com/devices')
    .then(res=> res.json())
    .then(data=> sethevices(data))
  },[up])

  return (
    <div className='container mx-auto mt-5'>
      <h2 className='login-title'>Inventory item</h2>
      <table className='main-table'>
        <tr>
          <th>Item name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
          {
            devices.map(device => <TableRow setUp={setUp} up={up} key={device._id} device={device}></TableRow>)
          }
      </table>
    </div>
  )
}

export default MangeItem