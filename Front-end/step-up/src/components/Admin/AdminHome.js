import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Admin/AdminHome.css';


const AdminHome = () => {
    const [product, setProduct] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [lowInventoryProducts, setLowInventoryProducts] = useState([]);
    const [highestPriceProduct, setHighestPriceProduct] = useState(null);
    const [lowestPriceProduct, setLowestPriceProduct] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get("http://localhost:8080/api/product/getAllProduct").then((res) => {
            // console.log(res.data)
            const productsData = res.data;
            setProduct(productsData)
            setProductCount(productsData.length);
            calculateTotalRevenue(productsData);
            calculateTopSellingProducts(productsData);
            findLowInventoryProducts(productsData);
            findHighestAndLowestPriceProducts(productsData);
        }).catch((err) => {
            console.error('Error fetching products:', err);
        })
    }

    const calculateTotalRevenue = (productsData) => {
        const total = productsData.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        setTotalRevenue(total);
    }

    const calculateTopSellingProducts = (productsData) => {
        const sortedProducts = [...productsData].sort((a, b) => b.quantity - a.quantity);
        const topProducts = sortedProducts.slice(0, 5); // Get top 5 selling products
        setTopSellingProducts(topProducts);
    }

    const findLowInventoryProducts = (productsData) => {
        const lowInventory = productsData.filter(product => product.quantity < 10); // Threshold for low inventory
        setLowInventoryProducts(lowInventory);
    }

    const findHighestAndLowestPriceProducts = (productsData) => {
        if (productsData.length === 0) return;

        const sortedProducts = [...productsData].sort((a, b) => b.price - a.price);
        setHighestPriceProduct(sortedProducts[0]);
        setLowestPriceProduct(sortedProducts[sortedProducts.length - 1]);
    }

    return (
        <div className='container'>
            <div className='productsDashboard'>
                <ul>
                    <li><h5>Total Products: </h5>{productCount}</li>
                    <li><h5>Total Revenue:</h5> ${totalRevenue.toFixed(2)}</li>
                    <li><h5>Highest Price Product:</h5> {highestPriceProduct ? `${highestPriceProduct.productName} - ₹${highestPriceProduct.price.toFixed(2)}` : 'N/A'}</li>
                    <li><h5>Lowest Price Product:</h5> {lowestPriceProduct ? `${lowestPriceProduct.productName} - ₹${lowestPriceProduct.price.toFixed(2)}` : 'N/A'}</li>
                </ul>
                <ul>
                    <li><h5>Top Selling Products:</h5>
                        <ul>
                            {topSellingProducts.map(product => (
                                <li key={product.productId}>{product.productName} - Quantity Sold: {product.quantity}</li>
                            ))}
                        </ul>
                    </li>
                    <li><h5>Low Inventory Products:</h5>
                        <ul>
                            {lowInventoryProducts.map(product => (
                                <li key={product.productId}>{product.productName} - Inventory: {product.quantity}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>


            <div className='orderDashboard'>

            </div>

            <div className='washOrderDashboard'>

            </div>
        </div>
    )
}

export default AdminHome
