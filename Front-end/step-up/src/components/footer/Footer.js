import React from 'react';
import './footer.css';

import logo from '../../assets/images/StepUP.png';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

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



            <footer>
                {/* <div className='container'> */}
                <div className='row footerSection'>
                    <div className='col-md-3 logo'>
                        <div className='footerLogo'>
                            <Link to={'/'}><img src={logo} alt='Logo'/></Link>
                            <br />
                            <p>Elevate Your Style, StepUP Your Game</p>
                        </div>
                    </div>

                    <div className='col-md-4 info'>

                        <h3>Get In Touch</h3>
                        {/* <ul>
                            <li><LocationOnOutlinedIcon /> <strong>Address</strong>: Infoway Technologies, Paud Rd, Rambaug Colony, Kothrud, Pune, Maharashtra 411038</li>
                            <li><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) 7082899900</li>
                            <li><EmailOutlinedIcon /> <strong>Email:</strong> abc@gmail.com</li>
                        </ul> */}
                        <p><LocationOnOutlinedIcon /> <strong>Address</strong>: Infoway Technologies, Paud Rd, Rambaug Colony, Kothrud, Pune, Maharashtra 411038</p>
                        <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) 7082899900 </p>
                        <p><EmailOutlinedIcon /> <strong>Email:</strong> abc@gmail.com</p>
                    </div>

                    <div className='col-md-3 company'>
                        <h3>Company Info</h3>
                        {/* <ul className="footer-list mb-sm-5 mb-md-0"> */}
                        <ul>
                            <li><Link to={'/user/about'}>About Us</Link></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Support Center</a></li>
                        </ul>
                    </div>

                    <div className='col-md-2  popular'>
                        <h3>Popular</h3>
                        {/* <ul className="footer-list mb-sm-5 mb-md-0"> */}
                        <ul>
                            <li><a href="#">Sneakers</a></li>
                            <li><a href="#">Clogs</a></li>
                            <li><a href="#">Flip-Flops</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">Heels</a></li>
                            <li><a href="#">Sandals</a></li>
                        </ul>
                    </div>


                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-md-12'>
                        {/* <p>Secured Payment Gateways</p>
                        <img src={paymentImage} /> */}

                        <div className='social'>

                            <ul>
                                <h5>Follow Us</h5>
                                <li>
                                    {/* <Link to={''}><FacebookOutlinedIcon /></Link> */}
                                    <a><FacebookOutlinedIcon /></a>
                                </li>
                                <li >
                                    {/* <Link to={''}><TwitterIcon /></Link> */}
                                    <a><TwitterIcon /></a>
                                </li>
                                <li >
                                    {/* <Link to={''}><InstagramIcon /></Link> */}
                                    <a><InstagramIcon /></a>
                                </li>
                                <li>
                                    {/* <Link to={''}><YouTubeIcon /></Link> */}
                                    <a><YouTubeIcon /></a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                {/* </div> */}
            </footer>

        </div>
    )
}

export default Footer
