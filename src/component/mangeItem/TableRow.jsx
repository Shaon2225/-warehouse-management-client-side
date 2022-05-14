import React from "react";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ device,up,setUp }) => {
  const { title, price, quantity, _id } = device;
  const dltItem = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/dltitem/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      }
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.acknowledged){
        setUp(!up);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'New item has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
      }
    })

    
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="dlt-btn" onClick={() => dltItem(_id)}>
          <MdDelete></MdDelete>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
