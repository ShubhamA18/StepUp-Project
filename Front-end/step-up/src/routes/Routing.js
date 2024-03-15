
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AdminHome from '../Pages/Admin/AdminHome';
import AdminSignin from '../Pages/Admin/AdminSignin';
import Order from '../Pages/Admin/Order';
import Products from '../Pages/Admin/Products';
import Home from '../Pages/Home/index';
import Signin from '../Pages/signin/Signin';
import Signup from '../Pages/signup/Signup';
import AddProduct from '../components/AddProduct/AddProduct';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/footer/Footer';
import AdminHeader from '../components/header/AdminHeader';
import Header from '../components/header/Header';
import NoProductFound from '../components/productSearch/NoProductFound';
import ProductSearch from '../components/productSearch/ProductSearch';
import Profile from '../components/profile/Profile';
import WashingForm from '../components/washing/WashingForm';

const Routing = () => {

    const location = useLocation();
    const isAdminSignin = () => {
        const { pathname } = location;
        return pathname.startsWith('/admin') ;
    };

    const isSigninPage=()=>{
        const { pathname}=location;
        return pathname==='/user/signin' || pathname==='/user/signup';
    }

    const isAdminPages=()=>{
        const{pathname}=location;
        return pathname==='/admin/product' || pathname==='/admin/order' || pathname==='/admin/home';
    }

    return (
        <div>
            {!isAdminSignin() && !isSigninPage() && <Header /> || isAdminPages()  && <AdminHeader/>}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/signin' element={<Signin />} />
                <Route path='/user/signup' element={<Signup />} />
                <Route path='/user/services' element={<WashingForm/>}></Route>
                <Route path='/user/productSearch' element={<ProductSearch/>}></Route>
                <Route path='/user/productNotFound' element={<NoProductFound/>}></Route>
                <Route path='/admin/signin' element={<AdminSignin />} />
                <Route path='/admin/home' element={<AdminHome/>}></Route>
                <Route path='/admin/product' element={<Products/>}></Route>
                <Route path='/admin/addProduct' element={<AddProduct/>}></Route>
                <Route path='/user/profile' element={<Profile/>}></Route>
                
                {/* <Route path='/admin/products' element={<ProductsPage/>}></Route> */}
                <Route path='/admin/order' element={<Order/>}></Route>
                <Route path='*' element={<NotFound />} />
            </Routes>

            {!isAdminSignin() && !isSigninPage() && <Footer/>}
        </div>
    )
}

export default Routing;
