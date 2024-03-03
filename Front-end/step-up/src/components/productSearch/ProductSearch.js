import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './productSearch.css';


const ProductSearch = () => {
    const [categoryFilters, setCategoryFilters] = useState([]);

    const location = useLocation();
    const { searchData, searchTerm, message } = location.state || {};

    // const [products, setProducts] = useState([]);
    

    // useEffect(() => {
    //     // Fetch product data when the component mounts
    //     axios.get('https://your-api-endpoint.com/products')
    //         .then(response => {
    //             setProducts(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching product data:', error);
    //         });
    // }, []);

    const handleCheckboxChange = (category) => {
        console.log(categoryFilters);
        if (categoryFilters.includes(category)) {
            setCategoryFilters(categoryFilters.filter((item) => item !== category));
        } else {
            setCategoryFilters([...categoryFilters, category]);
        }
    };

    const filteredProducts = categoryFilters.length === 0
        ? searchData
        : searchData.filter(product => categoryFilters.includes(product.category));


    return (
        <div className="app">
            <div className="filters">
                <h2>Filters</h2>
                <div className='filter-box'>
                    <h5>Sizes</h5>
                    {['6', '7', '8', '9', '10', '11'].map(category => (
                        <div key={category} className='filter-content'>
                            <FormControlLabel control={<Checkbox />} label={category} value={category}
                                checked={categoryFilters.includes(category)}
                                onChange={() => handleCheckboxChange(category)} />
                        </div>
                    ))}
                </div>

                <div className='filter-box'>
                    <h5>Color</h5>
                    {['Red', 'Black', 'White', 'Blue', 'Green', 'Pink'].map(category => (
                        <div key={category} className='filter-content'>
                            <FormControlLabel control={<Checkbox />} label={category} value={category}
                                checked={categoryFilters.includes(category)}
                                onChange={() => handleCheckboxChange(category)} />
                        </div>
                    ))}
                </div>

                <div className='filter-box'>
                    <h5>Price</h5>
                    {['500 - 1000', '1000- 3000', '3000 - 5000', '5000 >'].map(category => (
                        <div key={category} className='filter-content'>
                            <FormControlLabel control={<Checkbox />} label={category} value={category}
                                checked={categoryFilters.includes(category)}
                                onChange={() => handleCheckboxChange(category)} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-cards">
                <h2>Products</h2>
                <h4>{searchTerm}</h4>
                <div className="cards-container">

                    {filteredProducts.map(searchData => (
                        <div className="card" key={searchData.productId}>
                            {/* <div  className="product-card"> */}
                            <img src={searchData.image} className="card-img-top w-50 transition" alt={searchData.productName} />

                            <div className="card-body">
                                <h5 className="card-title">{searchData.brand}</h5>
                                <p>{searchData.productName}</p>
                                <p><span className='price'>₹{searchData.discountPrice} </span>
                                    <strike className="realPrice">₹{searchData.price}</strike></p>
                                <div>
                                    <Button variant="contained" className='add-to-cart-btn'>
                                        <ShoppingCartOutlinedIcon /> Add
                                    </Button>
                                    <Checkbox label="Wishlist" icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                                        sx={{
                                            color: pink[800],
                                            '&.Mui-checked': {
                                                color: pink[600],
                                            },
                                        }} />

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    );
}

export default ProductSearch
