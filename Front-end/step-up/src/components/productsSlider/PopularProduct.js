import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import './popularProduct.css';

const PopularProduct = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // let status = 'popular';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`http://localhost:8080/api/product/status/${'popular'}`).then((res) => {
            setProducts(res.data);
        }).catch((err) => {
            console.error('Error fetching data:', err);
        });
    };

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const productChunks = chunkArray(products, 5);

    const productDetails=(productId)=>{
        navigate(`/user/productDetail/${productId}`);
    }

    return (
        <div className="carousel-container">
            <Carousel interval={null} controls={true} indicators={false}>
                {productChunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div className="cards-wrapper">
                            {chunk.map((val) => (
                                <div key={val.productId} className="card" onClick={() => productDetails(val.productId)}>
                                    <img src={val.image} alt={val.productName} className="card-img-top" />
                                    <div className="card-body">
                                        <h5>{val.brand}</h5>
                                        <p className="card-title">{val.productName}</p>
                                        <p><span className='price'>₹{val.discountPrice} </span>
                                            <strike className="realPrice">₹{val.price}</strike>
                                            <span className='discount '>{val.discountPercentage}%</span></p>
                                        {/* <div className="buttons-container">
                                            <Button variant="contained" className='add-to-cart-btn'>
                                                <ShoppingCartOutlinedIcon /> Add
                                            </Button>
                                            <Button variant="contained" color="error" className='wishlist-btn'>
                                                <FavoriteBorderOutlinedIcon /> Wishlist
                                            </Button>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default PopularProduct;
