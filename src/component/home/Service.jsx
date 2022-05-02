import React from 'react'
import './Home.css'
import Servicecart from './Servicecart'

const Service = () => {
    const service=[
        {
            _id:1111,
            title: 'Samsung Galaxy S22',
            img:'https://i.ibb.co/tx9tmCL/s22.jpg',
            price:1100,
            detail: [
                '5 Camera', 'Snapdragon 8 gen 1','100x zoom','Super amoled display with 120Hz'
            ],
            quantity:4,
            supplierName:'Robart'
        },
        {
            _id:1111,
            title: 'Samsung Galaxy S22 ultra',
            img:'https://i.ibb.co/2StZMBY/s22-ultra.jpg',
            price:1100,
            detail: [
                '5 Camera', 'Snapdragon 8 gen 1','100x zoom','Super amoled display with 120Hz'
            ],
            quantity:4,
            supplierName:'Robart'
        },
        {
            _id:1111,
            title: 'Samsung Galaxy S22',
            img:'https://i.ibb.co/0BLHjgr/s21-ultra.jpg',
            price:1100,
            detail: [
                '5 Camera', 'Snapdragon 8 gen 1','100x zoom','Super amoled display with 120Hz'
            ],
            quantity:0,
            supplierName:'Robart'
        }
    ]
  return (
    <div>
        <h1 className='title'>Our services</h1>
        <div className='service-container'>
            {
                service.map(e => <Servicecart key={e._id} el={e}></Servicecart>)
            }
        </div>
    </div>
  )
}

export default Service