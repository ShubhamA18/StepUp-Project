import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css";

const Signin = () => {

    const navigate = useNavigate();
    const [item, setItem] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
    });


    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value })
        setError({ ...error, [name]: "" })
    }

    const validateForm = () => {
        let isValid = true;
        const newError = { ...error };

        if (item.email.trim() === "") {
            newError.email = "Email is required";
            isValid = false;
        }

        if (item.password.trim() === "") {
            newError.password = "Password is required";
            isValid = false;
        }

        setError(newError);
        return isValid;
    };

    async function login(event) {
        event.preventDefault();
        if (!validateForm()) {
            return; // If form is not valid, do not proceed with login
        }
        try {
            await axios.post("http://localhost:8080/api/user/login", item).then((res) => {
                // console.log(res.data);
                const newError = { ...error };
                if (res.data.message === "Email not exits") {
                    // alert("Email not exits");
                    newError.email = "Incorrect Email";
                    setError(newError);
                }
                else if (res.data.message === "password Not Match") {
                    // alert("password is incorrect");
                    newError.password = "Incorrect Password";
                    setError(newError);
                }
                else if (res.data.message === "Login Success") {
                    if (sessionStorage.getItem("id") === "null" && sessionStorage.getItem("email") === "null") {
                        sessionStorage.setItem("email", item.email);
                        sessionStorage.setItem("id", res.data.id);
                        navigate('/');
                    }
                    else {
                        sessionStorage.clear();
                        sessionStorage.setItem("email", item.email);
                        sessionStorage.setItem("id", res.data.id);
                        navigate('/');
                    }

                }
                else {
                    // alert("Incorrect Email and Password not match");
                    newError.email = "Incorrect Email";
                    newError.password = "Incorrect Password";
                    setError(newError);
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <div className="signin-box">
            <h2>Sign in</h2>
            <form>
                <div className="user-box">
                    {/* Email */}
                    <TextField fullWidth
                        id="outlined-basic-error-helper-text"
                        label="Email"
                        variant="outlined"
                        type='email'
                        name='email'
                        helperText={error.email}
                        error={Boolean(error.email)}
                        value={item.email}
                        onChange={inputChangeHandler}
                    />
                </div>

                <div className="user-box">
                    {/* Password */}
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        autoComplete="current-password"
                        helperText={error.password}
                        error={Boolean(error.password)}
                        value={item.password}
                        onChange={inputChangeHandler}
                    />

                    {/* <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    /> */}
                </div>

                <div className='user-button'>
                    {/* <Button component={Link} to={'/'} variant="contained" size="large" onClick={login}>Sign in</Button> */}
                    <Button variant="contained" size="large" onClick={login}>Sign in</Button>
                </div>

            </form>

            <h6>New Member <Link to={'/user/signup'}>Sign Up</Link></h6>

        </div>
    )
}

export default Signin
