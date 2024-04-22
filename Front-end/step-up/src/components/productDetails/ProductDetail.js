import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../productDetails/ProductDetail.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({
        productId: '',
        productName: '',
        brand: '',
        quantity: '',
        price: '',
        discountPercentage: '',
        discountPrice: '',
        image: '',
        status: '',
        description: {
            dId: '',
            dMaterialType: '',
            dWaterResistance: '',
            dOrigin: '',
            dWeight: '',
            dDescription: ''
        },
        category: {
            categoryId: '',
            topLevelCategory: '',
            secondLevelCategory: '',
            thirdLevelCategory: ''
        },
        sizeId: [],
        colorId: []
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/product/getProductById/${productId}`).then((res) => {
            setProduct(res.data)
        }).catch((err) => {
            console.error("Error fetching product:", err);
        });
    }, [productId])

    const [isWishlisted, setIsWishlisted] = useState(false);
    const handleToggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const addToCart = async (productId) => {
        
        const userId = sessionStorage.getItem("id")
        if(userId===null){
            navigate('/user/signin')
        }
        else{
            console.log(userId)
            console.log(productId)
            await axios.post(`http://localhost:8080/api/cart/addCart/${productId}/${userId}`).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.error('Error fetching data:', err);
            });
        }
        
    };

    return (
        <div className='container'>
            <section className='row mainProduct'>
                <div className='col-sm-6 image'>
                    <img src={product.image} alt={product.productName} />
                </div>
                <div className='col-sm-6'>
                    <h4>{product.brand}</h4>
                    <h2>{product.productName}</h2>
                    <hr></hr>

                    <p><span className='price'>₹{product.discountPrice} </span>
                        <span  className="realPrice">M.R.P <strike>₹{product.price}</strike></span>
                        <span className='discount '>{product.discountPercentage}% OFF</span>
                    </p>
                    {/* <p>inclusive of all taxes</p> */}

                    <h5 className='mt-3'>Shoe Colors</h5>
                    <div className='colors'>
                        {product.colorId.map((color) => (
                            <div key={color.colorId} className='colorBox' style={{ backgroundColor: color.colorName }}></div>
                        ))}
                    </div>


                    <h5 className='mt-3'>Shoe Sizes</h5>
                    <div className='sizes'>
                        {product.sizeId.map((size) => (
                            <p key={size.sizeType} className={size.sizeQuantity <= 0 ? 'unavailable' : 'available'}>
                                {size.sizeType}
                            </p>
                        ))}
                    </div>

                    <div className='mt-3'>
                        <button className='button-cart' onClick={() => addToCart(product.productId)}>Add to Cart</button>
                        <button className='button-wishlist' onClick={handleToggleWishlist}>
                            {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </button>
                    </div>
                    <hr></hr>

                    <div className='about'>
                            <p>{product.description.dDescription}</p>
                    </div>
                    <div className='details'>
                        <p><span>Material Type</span> : {product.description.dMaterialType}</p>
                        <p><span>Water Resistance</span> : {product.description.dWaterResistance}</p>
                        <p><span>Origin</span> : {product.description.dOrigin}</p>
                        <p><span>Weight</span> : {product.description.dWeight}</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductDetail
