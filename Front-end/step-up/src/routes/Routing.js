import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AboutUs from '../Pages/About/AboutUs';
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
    const pathname = location.pathname;


    const isAdminSigninPage = pathname === '/admin/signin';
    // Check if the current path is within admin routes
    const isAdminRoute = pathname.startsWith('/admin');

    // Check if the current path is within signin or signup routes
    const isAuthRoute = pathname.startsWith('/user/signin') || pathname.startsWith('/user/signup');

    // Render the appropriate header
    const renderHeader = () => {
        if (isAdminRoute) {
            if (isAdminSigninPage) {
                return null;
            }
            else {
                return <AdminHeader />;
            }

        } else if (!isAuthRoute) {
            return <Header />;
        }
        return null;
    };

    // Render the appropriate footer
    const renderFooter = () => {
        if (!isAdminRoute && !isAuthRoute) {
            return <Footer />;
        }
        return null;
    };

    return (
        <div>
            {/* Render the appropriate header */}
            {renderHeader()}

            {/* Define the Routes */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/signin' element={<Signin />} />
                <Route path='/user/signup' element={<Signup />} />
                <Route path='/user/services' element={<WashingForm />}></Route>
                <Route path='/user/productSearch' element={<ProductSearch />}></Route>
                <Route path='/user/productNotFound' element={<NoProductFound />}></Route>
                <Route path='/user/profile' element={<Profile />}></Route>
                <Route path='/user/about' element={<AboutUs />}></Route>

                <Route path='/admin/signin' element={<AdminSignin />} />
                <Route path='/admin/home' element={<AdminHome />}></Route>
                <Route path='/admin/product' element={<Products />}></Route>
                <Route path='/admin/addProduct' element={<AddProduct />}></Route>
                <Route path='/admin/order' element={<Order />}></Route>

                <Route path='*' element={<NotFound />} />
            </Routes>

            {renderFooter()}
        </div>
    );
}

export default Routing;
