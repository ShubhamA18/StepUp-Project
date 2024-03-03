import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = () => {
    const [product, setProduct] = useState([])
    const [item, setItem] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
        setItem(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get("http://localhost:8080/api/product/getAllProduct").then((res) => {
            // console.log(res.data)
            setProduct(res.data)
        }).catch((err) => {

        })
    }

    const deleteData = async (id) => {
        if (window.confirm(`Are you sure to delete record with id: ${id}`)) {
            try {
                await axios.delete(`http://localhost:8080/api/product/delete/${id}`).then((res) => {
                    if (res.data === "Id not found") {
                        window.alert("Product not found");
                    }
                    else {
                        window.alert("Product Deleted Successfully")
                    }

                    fetchData()
                }, fail => {
                    console.error(fail); // Error!
                })
            } catch (err) {
                alert(err);
            }
        }

    }

    return (
        <div>
            <h2>Product Dashborad</h2>
            <Link to='/admin/addProduct' className='btn btn-dark'>Add Product <i class="fa fa-plus" aria-hidden="true"></i></Link>
            <br />
            <br />
            <div className='container'>
                {/* Table start here */}
                <table className='table table-hover table-striped table-success'>
                    <thead className='table-dark'>
                        <tr>
                        <th>No.</th><th>ID</th><th>Name</th><th>Price</th><th>Brand</th><th>Quantity</th><th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((val, index) => {
                                return <tr key={index + 1}>
                                    <td>{index+1}</td>
                                    <td>{val.productId}</td>
                                    <td>{val.productName}</td>
                                    <td>{val.price}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.quantity}</td>
                                    <td>
                                        <Button variant='outline-dark m-1' onClick={() => handleShow(val)}>
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </Button>

                                        <Link to={`/editProduct/${val.id}`} className='btn btn-outline-primary'>
                                            <i class="fa fa-pencil-square" aria-hidden="true" ></i>
                                        </Link>

                                        <button type="button" className='btn btn-outline-danger m-1' onClick={() => deleteData(val.productId)}>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products
