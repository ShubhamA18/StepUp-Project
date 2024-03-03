import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./adminSignin.css";

const AdminSignin = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signin(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/admin/adminSignin", {
                adminName: name,
                adminPassword: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "Email not exits") {
                    alert("Email not exits");
                }
                else if (res.data.message === "Login Success") {
                    // localStorage.setItem(email,password);
                    navigate('/admin/home');
                }
                else {
                    alert("Incorrect Email and Password not match");
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
            <h2>Admin Sign in</h2>
            <form>
                <div className="box1">
                    {/* Email */}
                    <TextField fullWidth
                        id="outlined-basic-error-helper-text"
                        label="Name"
                        variant="outlined"
                        type='name'
                        name='name'
                        // helperText="Incorrect entry."

                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>

                <div className="box1">
                    {/* Password */}
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        autoComplete="current-password"

                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>

                <div className='button1'>
                    {/* <Button component={Link} to={'/'} variant="contained" size="large" onClick={login}>Sign in</Button> */}
                    <Button variant="contained" size="large"
                     onClick={signin}
                     >Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default AdminSignin
