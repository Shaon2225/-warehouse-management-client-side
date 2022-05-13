import React from 'react'
import { Link } from 'react-router-dom';

const Servicecart = ({el}) => {
    const {title,img,price,detail,quantity,supplierName,_id}=el;
    let x = 33;
  return (
    <div className='item-body'>
        <img className='item-img' src={img} alt="" />
        <div className='item-d'>
            <h3 className='title-basic'>{title}</h3>
            <h6 className='stock'>{(quantity==0)?'out of stock':'Available'}(<b>{quantity}</b>)</h6>
            <h4><b>Price : </b>{price}</h4>
            <p className='details'><b>Details : </b>{detail}</p>
            <h6>Supplied by <b>{supplierName}</b></h6>
        </div>
        <Link className='text-decoration-none text-white' to={`/itemdetails/${_id}`}><button className='update-btn'>Update Item</button></Link>
    </div>
  )
}

export default Servicecart