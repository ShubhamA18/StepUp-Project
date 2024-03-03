import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div>
            <Link to="/admin/product" className='btn btn-outline-primary btn-sm m-2'>Product</Link>
            <Link to="/admin/order" className='btn btn-outline-primary btn-sm my-2 mx-0'>Order</Link>
            <Link to="/admin/signin" className='btn btn-outline-danger btn-sm m-2 float-end' id='signout-button'>SignOut</Link>
        </div>
    )
}

export default AdminHeader
