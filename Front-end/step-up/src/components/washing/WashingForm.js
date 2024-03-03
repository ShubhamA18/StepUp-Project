import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WashingSteps from '../../assets/images/Shoe Washing Steps.png';
import shoeWash from '../../assets/images/white-shoes.jpg';

import './washingForm.css';

const shoeType = [
    {
        value: 'sneakers',
        label: 'Sneakers',
    },
    {
        value: 'leather shoes',
        label: 'Leather shoes',
    },
    {
        value: 'sports shoes',
        label: 'Sports shoes',
    },
    {
        value: 'casual shoes',
        label: 'Casual Shoes',
    },
];

const shoeaterial = [
    {
        value: 'leather',
        label: 'Leather',
    },
    {
        value: 'canvas',
        label: 'Canvas',
    },
    {
        value: 'mesh',
        label: 'Mesh',
    },
    {
        value: 'synthetic ',
        label: 'Synthetic ',
    },
    {
        value: 'rubber',
        label: 'Rubber',
    },
];


const WashingForm = () => {

    const currentDate = new Date();

    // Set the order date
    const formattedOrderDate = currentDate.toISOString().split('T')[0];
    // setItem({ ...item, orderDate: formattedOrderDate });

    // Calculate and set the return date (current date + 8 days)
    const returnDate = new Date(currentDate);
    returnDate.setDate(returnDate.getDate() + 8);
    const formattedReturnDate = returnDate.toISOString().split('T')[0];
    // setItem({ ...item, returnDate: formattedReturnDate });

    const nav = useNavigate()

    const [item, setItem] = useState({
        shoeType: "",
        shoeMaterial: "",
        instructions: "",
        orderDate: formattedOrderDate,
        returnDate: formattedReturnDate,
        userId: sessionStorage.getItem("id")
    })

    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value })
    }

    const addWashOrder = (event) => {
        event.preventDefault();

        const currentDate = new Date();

        // Set the order date
        const formattedOrderDate = currentDate.toISOString().split('T')[0];
        setItem({ ...item, orderDate: formattedOrderDate });

        // Calculate and set the return date (current date + 8 days)
        const returnDate = new Date(currentDate);
        returnDate.setDate(returnDate.getDate() + 8);
        const formattedReturnDate = returnDate.toISOString().split('T')[0];
        setItem({ ...item, returnDate: formattedReturnDate });

        // setItem({ ...item, userId: sessionStorage.getItem("id") })

        console.log(item)
        axios.post("http://localhost:8080/api/washing/addWashOrder", item).then(() => {
            window.alert("Order Send successfully")
            // nav("/dashboard")
        }).catch((err) => { })
    }


    return (
        <div>
            <div className='shoe'>
                <img src={shoeWash} alt="Shoe" />
            </div>
            <div className='container washing-form '>
                {/* <h2>Washing Form</h2> */}
                <div className='row'>
                    <form>
                        <div className='col-12 box1'>
                            {/* Type of Shoes */}
                            <TextField fullWidth
                                id="outlined-select-currency"
                                select
                                label="Type of Shoes"
                                defaultValue="sneakers"
                                className='mx-3'
                                name="shoeType"
                                onChange={inputChangeHandler} value={item.shoeType}
                            // helperText="Please select your currency"
                            >
                                {shoeType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* Material of the shoes */}
                            <TextField fullWidth
                                id="outlined-select-currency"
                                select
                                label="Material of the Shoes"
                                defaultValue="leather"
                                name='shoeMaterial'
                                onChange={inputChangeHandler} value={item.shoeMaterial}
                            // helperText="Please select your currency"
                            >
                                {shoeaterial.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                        <div className='col-12 box1'>
                            {/* Special Instructions */}
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Special Instructions"
                                multiline
                                rows={2}
                                className='mx-3'
                                name="instructions"
                                onChange={inputChangeHandler} value={item.instructions}
                            // helperText={error.address}
                            // error={Boolean(error.address)}
                            // value={address}
                            // onChange={(event) => {
                            //     setAddress(event.target.value);
                            // }}
                            />

                            <Button variant="contained" size="large" onClick={addWashOrder}>Send For Wash</Button>
                        </div>
                        {/* <input value={sessionStorage.getItem("id")}></input> */}
                    </form>
                </div>
            </div>
            <div className='washSteps'>
                <img src={WashingSteps} alt="shoe washing steps" />
            </div>
        </div>
    )
}

export default WashingForm
