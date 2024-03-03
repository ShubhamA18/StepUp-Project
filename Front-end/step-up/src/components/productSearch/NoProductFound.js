import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/images/NoProductFound.jpg';
import './NoProductFound.css';

const NoProductFound = () => {
    return (
        <section className='notFound'>
            <div className="container-fluid">
                <div className='box'>
                    <img src={NotFoundImg} />
                    <br /><br />
                    <h1>No Product Found</h1>
                    {/* <p>The link you clicked may be broken or the page may have been removed.
                        visit the Homepage or Contact us about the problem</p> */}
                    <br />

                    <div className='d-flex'>
                        <Button className='btn-g btn-lg m-auto'><Link to={'/'}>Back to Home Page</Link></Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NoProductFound
