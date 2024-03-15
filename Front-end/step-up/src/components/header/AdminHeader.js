import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const navigate = useNavigate();
    async function signout(event) {
        event.preventDefault();
        try {
            sessionStorage.clear();
            navigate('/admin/signin');
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <Link to="/admin/product" className='btn btn-outline-primary btn-sm m-2'>Product</Link>
            <Link to="/admin/order" className='btn btn-outline-primary btn-sm my-2 mx-0'>Order</Link>
            {/* <Link to="/admin/signin" className='btn btn-outline-danger btn-sm m-2 float-end' id='signout-button'>SignOut</Link> */}
            <button className='btn btn-outline-danger btn-sm m-2 float-end' onClick={signout}><LogoutOutlinedIcon /> Sign out</button>
        </div>
    )
}

export default AdminHeader
