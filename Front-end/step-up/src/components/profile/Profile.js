import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../profile/profile.css';

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



const Profile = () => {
    const navigate = useNavigate();

    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNo: '',
        gender: '',
        addressId: {
            addressId: '',
            address: '',
            area: '',
            city: '',
            state: '',
            pincode: ''
        }
    });

    // const [updatedUser, setUpdatedUser] = useState({
    //     id: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     phoneNo: '',
    //     gender: '',
    //     addressId: '',
    //     address: '',
    //     area: '',
    //     city: '',
    //     state: '',
    //     pincode: ''
    // })

    useEffect(() => {
        let id = sessionStorage.getItem("id");
        if (id !== null) {
            axios.get(`http://localhost:8080/api/user/getById/${id}`).then((res) => {
                if (res.data.message === "Id not found") {
                    navigate('/user/signin');
                }
                else {
                    setUser(res.data); // Assuming the data is returned as an array with a single object
                }
            }).catch((err) => {
                console.error('Error fetching data:', err);
            });
        }
        else {
            navigate('/user/signin');
        }
    }, [navigate]);

    const handleInputClick1 = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleInputClick2 = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            addressId: {
                ...prevUser.addressId,
                [name]: value
            }
        }));
    };



    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/api/user/updateUser/${user.id}`, user)
            .then((res) => {
                console.log('Update successful:', res.data);
            })
            .catch((err) => {
                console.error('Error updating data:', err);
            });
    };



    return (
        <div className='profile'>
            <h2>Profile of {user.firstName} {user.lastName}</h2>
            <form >
                <div className='form'>
                    <div className='box1'>
                        {/* First Name */}
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            type='text'
                            name='firstName'
                            // helperText={error.firstName}
                            // error={Boolean(error.firstName)}
                            onChange={handleInputClick1}
                            value={user.firstName}

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
                            // helperText={error.lastName}
                            // error={Boolean(error.lastName)}
                            value={user.lastName || ''}
                            onChange={handleInputClick1}
                        />
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
                            // helperText={error.email}
                            // error={Boolean(error.email)}
                            value={user.email || ''}
                            onChange={handleInputClick1}
                        />

                        {/* Password */}
                        <TextField
                            fullWidth
                            className='input'
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type='text'
                            name='password'
                            // helperText={error.password}
                            // error={Boolean(error.password)}
                            value={user.password || ''}
                            onChange={handleInputClick1}
                        />
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
                            // helperText={error.phoneNo}
                            // error={Boolean(error.phoneNo)}
                            value={user.phoneNo || ''}
                            onChange={handleInputClick1}
                        />

                        {/* Gender */}
                        <TextField fullWidth
                            className='input'
                            id="outlined-select-currency"
                            select
                            label="Gender"
                            defaultValue="male"
                            name='gender'
                            // helperText={error.gender}
                            // error={Boolean(error.gender)}
                            value={user.gender || ''}
                            onChange={handleInputClick1}
                        >
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
                            // helperText={error.address}
                            // error={Boolean(error.address)}
                            value={user.addressId.address}
                            onChange={handleInputClick2}
                        />
                    </div>

                    <div className='box1'>
                        {/* area */}
                        <TextField fullWidth id="outlined-basic" label="Area" variant="outlined" type='text' name='area'
                            // helperText={error.area}
                            // error={Boolean(error.area)}
                            value={user.addressId.area}
                            onChange={handleInputClick2}
                        />

                        {/* City */}
                        <TextField fullWidth className='input' id="outlined-basic" label="City" variant="outlined" type='text' name='city'
                            // helperText={error.city}
                            // error={Boolean(error.city)}
                            value={user.addressId.city}
                            onChange={handleInputClick2}
                        />
                    </div>

                    <div className='box1'>
                        {/* state */}
                        <TextField fullWidth id="outlined-basic" label="State" variant="outlined" type='text' name='state'
                            // helperText={error.state}
                            // error={Boolean(error.state)}
                            value={user.addressId.state}
                            onChange={handleInputClick2}
                        />

                        {/* pincode */}
                        <TextField fullWidth className='input' id="outlined-basic" label="Pincode" variant="outlined" type='text' name='pincode'
                            // helperText={error.pincode}
                            // error={Boolean(error.pincode)}
                            value={user.addressId.pincode}
                            onChange={handleInputClick2}
                        />
                    </div>
                </div>

                <div className='update-button'>
                    <Button variant="contained" size="large" onClick={handleUpdate}>Update</Button>

                </div>

            </form>
        </div>

    )
}

export default Profile
