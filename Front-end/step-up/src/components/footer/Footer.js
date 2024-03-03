import React from 'react';
import Logo from '../../assets/images/StepUP.png';
import './footer.css';

import { Link } from "react-router-dom";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='footerWrapper'>
            {/* <div className='footerBoxes'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={Icon1}></img></span>
                                <div className='info'>
                                    <h4>Best Price % Offers</h4>
                                    <p>Orders Rs50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={Icon2}></img></span>
                                <div className='info'>
                                    <h4>Free delivery</h4>
                                    <p>24/7 Service</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={Icon3}></img></span>
                                <div className='info'>
                                    <h4>Great Day Deal</h4>
                                    <p>When you sign Up</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={Icon4}></img></span>
                                <div className='info'>
                                    <h4>Wide Assortment</h4>
                                    <p>Mega Discount</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={Icon5}></img></span>
                                <div className='info'>
                                    <h4>Easy Return</h4>
                                    <p>Within 30 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <hr></hr>

            <footer>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3 part1'>
                            <div className='footerLogo'>
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link> 
                                <br />
                                <p>Elevate Your Style, StepUP Your Game</p>
                            </div>

                            <p><LocationOnOutlinedIcon /> <strong>Address</strong>: Infoway Technologies, Paud Rd, Rambaug Colony, Kothrud, Pune, Maharashtra 411038</p>
                            <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) 7082899900 </p>
                            <p><EmailOutlinedIcon /> <strong>Email:</strong> abc@gmail.com</p>
                        </div>

                        <div className='col-md-6 part2'>
                            <div className='row'>
                                <div className='col'>
                                    <h3>Company</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Support Center</a></li>
                                    </ul>
                                </div>

                                <div className='col'>
                                    <h3>Account</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to={'/user/signin'}>Signin</Link> </li>

                                        <li><a href="#">View Cart</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Track My Order</a></li>
                                        <li><a href="#">Shipping Details</a></li>
                                        <li><a href="#">Compare Product</a></li>
                                    </ul>
                                </div>

                                <div className='col'>
                                    <h3>Popular</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><a href="#">Sneakers</a></li>
                                        <li><a href="#">Clogs</a></li>
                                        <li><a href="#">Flip-Flops</a></li>
                                        <li><a href="#">Sports</a></li>
                                        <li><a href="#">Heels</a></li>
                                        <li><a href="#">Sandals</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 part3'>
                            <br />

                            <p>Secured Payment Gateways</p>
                            <img src={paymentImage} />


                            <div className='d-flex align-items-center social'>
                                <h5>Follow Us</h5>
                                <ul className='list list-inline'>
                                    <li className='list-inline-item'>
                                        {/* <Link to={''}><FacebookOutlinedIcon /></Link> */}
                                        <a><FacebookOutlinedIcon /></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        {/* <Link to={''}><TwitterIcon /></Link> */}
                                        <a><TwitterIcon /></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        {/* <Link to={''}><InstagramIcon /></Link> */}
                                        <a><InstagramIcon /></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        {/* <Link to={''}><YouTubeIcon /></Link> */}
                                        <a><YouTubeIcon /></a>
                                    </li>

                                </ul>
                            </div>


                        </div>

                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer
