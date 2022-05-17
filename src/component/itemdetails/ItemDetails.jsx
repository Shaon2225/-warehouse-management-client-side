import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../Firebase.init";
import UsePut from "../../hooks/useFetch";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [user]=useAuthState(auth);
  const [detail, setDetail] = useState({});
  const [up, setUp] = useState(true);

  const url = `https://fast-tor-50406.herokuapp.com/services/${id}`;
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [up]);

  const handleDeleivery = async() => {
    let x = parseInt(detail.quantity)-1;
    const url1 = `https://fast-tor-50406.herokuapp.com/services/update/${id}`;
    const body = {
      email : user.email,
      quantity : x
    };
    await fetch(url1, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {if(data.acknowledged) setUp(!up)});
  };

  const updateProductQuantity = e =>{
    e.preventDefault();
    const value = parseInt(e.target.quantity.value) + parseInt(detail.quantity);
    const url1 = `https://fast-tor-50406.herokuapp.com/services/updatestock/${id}`;
    const body = {
      email: user.email,
      quantity: value
    };
    fetch(url1,{
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    })
    .then((res) => res.json())
    .then((data) => {if(data.acknowledged) setUp(!up)});
    e.target.reset();
  }

  return (
    <div className="itemdetail-container">
      <div className="item-detail">
        <h1 className="title">{detail.title}</h1>
        <small>
          <b>ID : </b>
          {detail._id}
        </small>
        <p>
          <b>Details: </b>
          {detail.detail}
        </p>
        <h6>
          <b>Price : </b>
          {detail?.price}
        </h6>
        <h6>
          <b>Supplier : </b>
          {detail?.supplierName}
        </h6>
        <h6>
          <b>Quantity : </b>
          {detail?.quantity}
        </h6>
        <h6>
          <b>Sell status : </b>
          {detail?.quantity == 0 ? "stock out" : "Pendding"}
        </h6>
        <button
          onClick={handleDeleivery}
          className={`basic-btn ${
            detail.quantity == 0 ? "basic-btn-disabled" : ""
          }`}
          disabled={detail.quantity == 0}
        >
          Deliver Item
        </button>
        <div>
          <form onSubmit={updateProductQuantity}>
            <h5>Update Product Quantity</h5>
            <input className="input-quantity" type="number" name="quantity" id="" />
            <input type="submit" className=" basic-btn" value="Update" />
          </form>
        </div>
      </div>
      <div>
        <img className="itemdetail-img" src={detail.img} alt="" />
      </div>
    </div>
  );
};

export default ItemDetails;
