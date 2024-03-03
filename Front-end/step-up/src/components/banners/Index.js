import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner1 from '../../assets/images/1.jpg';
import Banner2 from '../../assets/images/2.jpg';
import Banner3 from '../../assets/images/3.jpg';
import './style.css';

const Banners = () => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('');

    // useEffect(() => {
        

    //     if (searchTerm !== '') {
    //         fetchData();
    //     }
    // }, [searchTerm, navigate]);

    const handleSearch = async (value) => {
        setSearchTerm(value);
        // const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/product/search/${searchTerm}`);
                let searchData;

                if (response.status === 200) {
                    searchData = response.data;
                    setMessage('');
                    navigate('/user/productSearch', { state: { searchData, searchTerm, message } });
                } else if (response.status === 404) {
                    setMessage('No products found for the given search criteria');
                    navigate('/user/productNotFound');
                }

            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        // };
    };
    return (
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='box'>
                            <img src={Banner1} alt='Men' className='w-100 transition' ></img>
                            <div className="img-text" onClick={() => handleSearch('men')}>Men</div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box'>
                            <img src={Banner2} alt='Women' className='w-100 transition' ></img>
                            <div className="img-text" onClick={() => handleSearch('women')}>Women</div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box'>
                            <img src={Banner3} alt='Services' className='w-100 transition'></img>
                            <div className="img-text">Service</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners;
