import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/StepUP.png';
import '../header/header.css';

const Header = () => {
    const navigate = useNavigate();

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown1, setisOpenDropDown1] = useState(false);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    });

    const [categories, setcategories] = useState([
        'All',
        'Formals',
        'Casuals',
        'Sports',
        'Sandals',
        'Flip-Flops',
        'Clogs',
        'Heels'
    ]);

    async function signout(event) {
        event.preventDefault();
        try {
            sessionStorage.clear();
            navigate('/user/signin');
        }
        catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        let id = sessionStorage.getItem("id")
        if (id !== null) {
            axios.get(`http://localhost:8080/api/user/getById/${id}`).then((res) => {

                if (res.data.message === "Id not found") {
                    // alert("Email not exits");
                    setUser("Account")
                }
                else {
                    setUser(res.data)
                }

            }).catch((err) => {
                console.error('Error fetching data:', err);
            })
        }
        else {
            setUser({
                firstName: "Guest",
                lastName: "Account"
            })
        }
    }

    const userType = () => {
        if (user.firstName === "Guest" && user.lastName === "Account") {
            return <Button onClick={signout}><LogoutOutlinedIcon /> Sign in</Button>
        }
        else {
            return <Button onClick={signout}><LogoutOutlinedIcon /> Sign out</Button>
        }
    }

    const servicesSignIn = () => {
        if (user.firstName === "Guest" && user.lastName === "Account") {
            navigate('/user/signin');
        }
        else {
            navigate('/user/services');
        }
    }
    const profileSignInCheck=()=>{
        if (user.firstName === "Guest" && user.lastName === "Account") {
            navigate('/user/signin');
        }
        else {
            navigate('/user/profile');
        }
    }

    //Search 
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('');
    const handleSearch = async () => {
        try {
            if (searchTerm ==="") {
                navigate('/user/productNotFound');
            }
            else {

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
            }

        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };


    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>

                    {/* logo */}
                    <div className='col-2 col-lg-2 col-md-2 col-sm-2 logo'>
                        <Link to={'/'}><img src={Logo} alt='Logo' className='img-fluid' /></Link>
                    </div>


                    {/* search */}
                    <div className='col-5 col-lg-5 col-md-5 col-sm-5 headerSearch'>
                        {/* <div className='headerSearch d-flex align-items-center'> */}
                        {/* <Select data={categories} /> */}

                        <div className='search container'>
                            <input type='text' placeholder='Search'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                            <SearchIcon className='searchicon cursor' onClick={handleSearch} />
                        </div>

                        {/* </div> */}

                    </div>

                    <div className='col-5 col-lg-5 col-md-5 col-sm-5 '>
                        <div className='headertabs'>
                            {/* ml-auto d-flex align-items-center */}
                            <ul className='list list-inline'>
                                <ClickAwayListener onClickAway={() => setisOpenDropDown1(false)}>
                                    <li className='list-inline-item'>

                                        <span onClick={() => setisOpenDropDown1(!isOpenDropDown1)}><AutoAwesomeOutlinedIcon /> Services</span>
                                        {
                                            isOpenDropDown1 !== false &&
                                            <ul className='dropdownmenu'>
                                                {/* <li><Link to={'/user/services'}>Washing</Link></li> */}
                                                <li><Button className='align-items-center' onClick={servicesSignIn}> <AssignmentIndOutlinedIcon /> Washing</Button></li>
                                                {/* <li><Button className='align-items-center'><PinDropOutlinedIcon /> Coustomize</Button></li> */}
                                            </ul>

                                        }
                                    </li>
                                </ClickAwayListener>

                                <li className='list-inline-item'>
                                    <span><FavoriteBorderIcon /> Wishlist</span>
                                </li>

                                <li className='list-inline-item'>
                                    <span><ShoppingCartOutlinedIcon /> Cart<span className='badge bg-primary rounded-circle'> </span></span>
                                </li>
                                <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                                    <li className='list-inline-item' >

                                        <span onClick={() => setisOpenDropDown(!isOpenDropDown)}><PersonIcon /> {user.firstName} {user.lastName}</span>
                                        {
                                            isOpenDropDown !== false &&
                                            <ul className='dropdownmenu'>
                                                <li><Button onClick={profileSignInCheck}><AssignmentIndOutlinedIcon /> Profile</Button></li>
                                                <li><Button><PinDropOutlinedIcon /> Tracking</Button></li>
                                                <li><Button><FavoriteBorderIcon /> My Wishlist</Button></li>
                                                <li>{userType()}</li>
                                            </ul>
                                        }
                                    </li>
                                </ClickAwayListener>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </header>

    )
}

export default Header
