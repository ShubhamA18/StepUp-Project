import React, { useState } from 'react';

const AddProduct = () => {

    const [product,setProduct]=useState();
    const calDiscountPrice=()=>{

    }
    return (
        <div className='addProduct'>
            <h2>Add Product</h2>
            <form>
                <input type='text' name='productName' placeholder='Product Name'/>
                <input type='text' name='brand' placeholder='Brand'/>
                <input type='number' name='quantity' placeholder='Quantity'/>
                <input type='number' name='price' placeholder='Product Price'/>
                <input type='number' name='discountPercentage' placeholder='Discount Percentage' onBlur={calDiscountPrice}/>
                <input type='text' name='productName' placeholder='Product Name'/>
                <input type='text' name='productName' placeholder='Product Name'/>
                <input type='text' name='productName' placeholder='Product Name'/>
                <input type='text' name='productName' placeholder='Product Name'/>
                <input type='text' name='productName' placeholder='Product Name'/>
                <input type='text' name='productName' placeholder='Product Name'/>
            </form>
        </div>
    )
}

export default AddProduct
