import React from 'react'
import Slider from "react-slick";
import './style.css'
import img1 from '../../../assets/images/7.jpg'
import img2 from '../../../assets/images/8.jpg'
import img3 from '../../../assets/images/9.jpg'
import img4 from '../../../assets/images/10.jpg'
import img5 from '../../../assets/images/11.jpg'
import img6 from '../../../assets/images/12.jpg'

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <section className='homeSlider'>
            <div className='container-fluid'>
                <Slider {...settings} className='home_slider_main'>
                    <div>
                        <img src={img1} ></img>
                    </div>
                    <div>
                    <img src={img2}></img>
                    </div>
                    <div>
                    <img src={img3}></img>
                    </div>
                    <div>
                    <img src={img4}></img>
                    </div>
                    <div>
                    <img src={img5}></img>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlider;
