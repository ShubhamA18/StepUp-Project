import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

const Product = () => {

    const [products, setProducts] = useState([]);

    let status = 'popular'
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:8080/api/product/status/${status}`).then((res) => {
            // console.log(res.data)
            setProducts(res.data)

        }).catch((err) => {
            console.error('Error fetching data:', err);
        })
    }


    return (
        <div>
            <div class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="cards-wrapper">
                            {products.map((val, index) => {
                                return <div key={val.productId} class="card ">
                                    <img src={val.image} alt={val.productName} class="card-img-top" />

                                    <div class="card-body">
                                        <h5 class="card-title">{val.productName}</h5>
                                        <p>{val.brand}</p>
                                        <span className='price'>₹{val.discountPrice}</span>
                                        <strike>₹{val.price}</strike>
                                        <div className="buttons-container">
                                            <Button variant="contained" className='add-to-cart-btn'><ShoppingCartOutlinedIcon /> Add</Button>
                                            <Button variant="contained" color="error" className='wishlist-btn'><FavoriteBorderOutlinedIcon /> Wishlist</Button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Product;



