import React from 'react';
import Banners from '../../components/banners/Index';
import NewProduct from '../../components/products/NewProduct';
import PopularProduct from '../../components/products/PopularProduct';
import Slider from './slider/index';
import './style.css';



const Home = () => {
    return (
        <div>
            <Slider />
            <Banners />

            <section className='homeProducts'>
                <div className='container-fluid'>
                    <h2>Popular Products</h2>
                    <div className='row productRow'>
                        <div className='item'>
                            <PopularProduct />
                        </div>
                    </div>
                    <h2>Latest Products</h2>
                    <div className='row productRow'>
                        <div className='item'>
                            <NewProduct />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home;
