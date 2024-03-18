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
            <div className='d-flex align-items-center justify-content-between mt-2'>
                <div>
                    <Link to="/admin/home" className='btn btn-outline-primary btn-sm ms-2' style={{ width: "80px" }}>Home</Link>
                    <Link to="/admin/product" className='btn btn-outline-primary btn-sm mx-2' style={{ width: "80px" }}>Product</Link>
                    <Link to="/admin/order" className='btn btn-outline-primary btn-sm' style={{ width: "80px" }}>Order</Link>
                </div>
                {/* <h2 className='float-center'>Step-UP</h2> */}
                <p className="h2 float-center">Step-UP</p>
                {/* <Link to="/admin/signin" className='btn btn-outline-danger btn-sm m-2 float-end' id='signout-button'>SignOut</Link> */}
                <button className='btn btn-outline-danger btn-sm me-2 float-end' onClick={signout}><LogoutOutlinedIcon /> Sign out</button>
            </div>
            <hr className='my-1'></hr>
        </div>
    )
}

export default AdminHeader
