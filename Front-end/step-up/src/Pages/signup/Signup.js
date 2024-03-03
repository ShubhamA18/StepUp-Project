import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css";

const genderOption = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    },
];

const Signup = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNo: "",
        gender: "",
        address: "",
        area: "",
        city: "",
        state: "",
        pincode: ""
    });

    const navigate = useNavigate();

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setError((prevError) => ({
            ...prevError,
            [name]: "",
        }));
    };


    const validateForm = () => {
        let isValid = true;
        const newError = { ...error };

        if (!firstname || firstname === "") {
            newError.firstName = "First Name is required";
            isValid = false;
        }

        if (!lastname || lastname === "") {
            newError.lastName = "Last Name is required";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            newError.email = "Invalid Email";
            isValid = false;
        }


        if (!password || password.trim() === "") {
            newError.password = "Password is required";
            isValid = false;
        }

        const phoneNumberRegex = /^[0-9]{10}$/;
        if (!phoneNumberRegex.test(phoneno)) {
            newError.phoneNo = "Enter a valid 10-digit phone number";
            isValid = false;
        }

        if (!gender || gender === "") {
            newError.gender = "Gender is required";
            isValid = false;
        }

        if (!address || address === "") {
            newError.address = "Address is required";
            isValid = false;
        }

        if (!area || area === "") {
            newError.area = "Area is required";
            isValid = false;
        }

        if (!city || city === "") {
            newError.city = "City is required";
            isValid = false;
        }

        if (!state || state === "") {
            newError.state = "State is required";
            isValid = false;
        }

        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(pincode)) {
            newError.pincode = "Enter a 6-digit pincode";
            isValid = false;
        }


        setError(newError);
        return isValid;
    }

    async function save(event) {
        event.preventDefault();

        if (!validateForm()) {
            return; // If form is not valid, do not proceed with login
        }
        try {
            await axios.post("http://localhost:8080/api/user/addUser", {
                user: {
                    firstName: firstname,
                    lastName: lastname,
                    email: email,
                    password: password,
                    phoneNo: phoneno,
                    gender: gender,
                },
                userAddress: {
                    address: address,
                    area: area,
                    city: city,
                    state: state,
                    pincode: pincode,
                },
            }).then((res) => {
                const newError = { ...error };
                if (res.data === "email exist") {
                    newError.email = "Email already Exist";
                    setError(newError);
                }
                else {
                    navigate('/user/signin');
                }
            }, fail => {
                console.error(fail); // Error!
            })

            // alert("User Registation Successfully");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='signup-box'>
            <h2>Sign up</h2>
            <form>
                <div className='box1'>
                    {/* First Name */}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        type='text'
                        name='firstName'
                        helperText={error.firstName}
                        error={Boolean(error.firstName)}
                        value={firstname}
                        onChange={(event) => {
                            setFirstname(event.target.value);
                        }}
                    />

                    {/* Last Name */}
                    <TextField
                        fullWidth
                        className='input'
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        type='text'
                        name='lastName'
                        helperText={error.lastName}
                        error={Boolean(error.lastName)}
                        value={lastname}
                        onChange={(event) => {
                            setLastname(event.target.value);
                        }} />
                </div>

                <div className='box1'>
                    {/* Emali */}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type='email'
                        name='email'
                        helperText={error.email}
                        error={Boolean(error.email)}
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />

                    {/* Password */}
                    <TextField
                        fullWidth
                        className='input'
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type='password'
                        name='password'
                        helperText={error.password}
                        error={Boolean(error.password)}
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                </div>

                <div className='box1'>
                    {/* Phone No */}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        type='tel'
                        name='phoneNo'
                        helperText={error.phoneNo}
                        error={Boolean(error.phoneNo)}
                        value={phoneno}
                        onChange={(event) => {
                            setPhoneno(event.target.value);
                        }}
                    />

                    {/* Gender */}
                    <TextField fullWidth
                        className='input'
                        id="outlined-select-currency"
                        select
                        label="Gender"
                        defaultValue="male"
                        name='gender'
                        helperText={error.gender}
                        error={Boolean(error.gender)}
                        value={gender}
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}>
                        {genderOption.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div className='address-box1'>
                    {/* Address */}
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={2}
                        name="address"
                        helperText={error.address}
                        error={Boolean(error.address)}
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                    />
                </div>

                <div className='box1'>
                    {/* area */}
                    <TextField fullWidth id="outlined-basic" label="Area" variant="outlined" type='text' name='area'
                        helperText={error.area}
                        error={Boolean(error.area)}
                        value={area}
                        onChange={(event) => {
                            setArea(event.target.value);
                        }} />

                    {/* City */}
                    <TextField fullWidth className='input' id="outlined-basic" label="City" variant="outlined" type='text' name='city'
                        helperText={error.city}
                        error={Boolean(error.city)}
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }} />
                </div>

                <div className='box1'>
                    {/* state */}
                    <TextField fullWidth id="outlined-basic" label="State" variant="outlined" type='text' name='state'
                        helperText={error.state}
                        error={Boolean(error.state)}
                        value={state}
                        onChange={(event) => {
                            setState(event.target.value);
                        }} />

                    {/* pincode */}
                    <TextField fullWidth className='input' id="outlined-basic" label="Pincode" variant="outlined" type='text' name='pincode'
                        helperText={error.pincode}
                        error={Boolean(error.pincode)}
                        value={pincode}
                        onChange={(event) => {
                            setPincode(event.target.value);
                        }} />
                </div>

                <div className='user-button'>
                    <Button variant="contained" size="large" onClick={save}>Sign up</Button>
                    <h6>Already have a account <Link to={'/user/signin'}>Signin here</Link></h6>
                </div>

            </form>
        </div>
    )
}

export default Signup
