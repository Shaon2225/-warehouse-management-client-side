import React, { useRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../Firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)

    const productNameRef = useRef();
    const productImgRef = useRef();
    const productPriceRef = useRef();
    const productQuantityRef = useRef();
    const productDetialRef = useRef();
    const supplierNameRef = useRef();


    const addNewItem = e =>{
        e.preventDefault();
        const title = productNameRef.current.value;
        const img = productImgRef.current.value;
        const price = productPriceRef.current.value;
        const quantity = productQuantityRef.current.value;
        const supplierName = supplierNameRef.current.value;
        const detail = productDetialRef.current.value;
        const email = user.email;
        const newProduct = {title,img, price, quantity,supplierName,detail,email};
        
        fetch('http://localhost:5000/additem',{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'New item has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<p>Prodcut is not save!!</p>'
                  })
            }
        })

        e.target.reset();
    }

  return (
    <div className='login-container'>
        <h2 className='login-title'> Add new item to inventory</h2>
        <form className='form-container' onSubmit={addNewItem}>
            <label>
                <p>Product Name</p>
                <input type="text" ref={productNameRef} required/>
            </label>
            <label>
                <p>Product Image</p>
                <input type="text" ref={productImgRef} required/>
            </label>
            <label>
                <p>Price</p>
                <input type="number" ref={productPriceRef} required />
            </label>
            <label>
                <p>Quantity</p>
                <input type="number" ref={productQuantityRef} required/>
            </label>
            <label>
                <p>Supplier Name</p>
                <input type="text" ref={supplierNameRef} required/>
            </label>
            <label>
                <p>Product details</p>
                <textarea type="text" ref={productDetialRef} required/>
            </label>
            <input type="submit" className='submit-btn' value="Add Product" />
        </form>
    </div>
  )
}

export default AddItem