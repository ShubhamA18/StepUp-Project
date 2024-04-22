import axios from 'axios';
import React, { useState } from 'react';
import './addProduct.css';

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: '',
        brand: '',
        quantity: '',
        price: 0,
        discountPercentage: 0,
        discountPrice: '',
        image: '',
        status: '',
        description: {
            dMaterialType: '',
            dWaterResistance: '',
            dOrigin: '',
            dWeight: '',
            dDescription: ''
        },
        category: {
            topLevelCategory: '',
            secondLevelCategory: '',
            thirdLevelCategory: ''
        },
        sizeId: [

        ],
        colorId: [

        ]
    });
    const calDiscountPrice = () => {
        const price = parseFloat(product.price);
        const discountPercentage = parseFloat(product.discountPercentage);
        const discountPrice1 = (price * discountPercentage) / 100;
        const discountPrice = price - discountPrice1;

        // setProduct(prevUser => ({
        //     ...prevUser,
        //     discountPrice: discountPrice.toString() // Convert to string for input value
        // }));

        setProduct(prevUser => ({
            ...prevUser,
            discountPrice: discountPrice.toString() // Convert to string for input value
            // products: {
            //     ...prevUser.products,
            //     discountPrice: discountPrice.toString() // Convert to string for input value
            // }
        }));
    }

    const [sizeCount, setSizeCount] = useState(0);

    const handleAddSize = () => {
        setSizeCount(sizeCount + 1);
        // console.log(product)
    };

    const handleRemoveSize = (indexToRemove) => {
        setSizeCount(sizeCount - 1);
        // You may want to handle removing data associated with this size div from your state here.
    };

    const [colorCount, setColorCount] = useState(0);

    const handleAddColor = () => {
        setColorCount(colorCount + 1);
    };

    const handleRemoveColor = (indexToRemove) => {
        setColorCount(colorCount - 1);
        // You may want to handle removing data associated with this color div from your state here.
    };

    const handleProductInputClick = (event) => {
        const { name, value } = event.target;
        setProduct(prevUser => ({
            ...prevUser,
            [name]: value
            // product: {
            //     ...prevUser,
                
            // }
        }));
    };

    const handleDescriptionsInputClick = (event) => {
        const { name, value } = event.target;
        setProduct(prevUser => ({
            ...prevUser,
            description: {
                ...prevUser.description,
                [name]: value
            }
        }));
    };

    const handleCategoryInputClick = (event) => {
        const { name, value } = event.target;
        setProduct(prevUser => ({
            ...prevUser,
            category: {
                ...prevUser.category,
                [name]: value
            }
        }));
    };

    const handleSizeInputClick = (index, event) => {
        const { name, value } = event.target;
        const [fieldName, fieldIndex] = name.split('-'); // Extract field name and index from the name attribute
        setProduct(prevProduct => {
            const updatedSizes = [...prevProduct.sizeId];
            const sizeIndex = parseInt(fieldIndex);
            if (!isNaN(sizeIndex)) { // Check if the fieldIndex is a valid number
                if (!updatedSizes[sizeIndex]) {
                    updatedSizes[sizeIndex] = {}; // Create a new object if it doesn't exist
                }
                updatedSizes[sizeIndex] = { ...updatedSizes[sizeIndex], [fieldName]: value }; // Update the specific field
            }
            return { ...prevProduct, sizeId: updatedSizes };
        });
    };

    const handleColorInputClick = (index, event) => {
        const { name, value } = event.target;
        const [fieldName, fieldIndex] = name.split('-'); // Extract field name and index from the name attribute
        setProduct(prevProduct => {
            const updatedColors = [...prevProduct.colorId];
            const colorIndex = parseInt(fieldIndex);
            if (!isNaN(colorIndex)) { // Check if the fieldIndex is a valid number
                if (!updatedColors[colorIndex]) {
                    updatedColors[colorIndex] = {}; // Create a new object if it doesn't exist
                }
                updatedColors[colorIndex] = { ...updatedColors[colorIndex], [fieldName]: value }; // Update the specific field
            }
            return { ...prevProduct, colorId: updatedColors };
        });
    };

    const AddProducts = () => {
        axios.post(`http://localhost:8080/api/product/addProduct`, product)
            .then((res) => {
                console.log('Added successful:', res.data);
            })
            .catch((err) => {
                console.error('Error Adding data:', err);
            });
    }

    return (
        <div className='container addProduct'>
            <h2>Add Product</h2>
            <hr></hr>
            <form className='form'>
                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-8 flex-column d-flex">
                        <label className="form-control-label px-2 ">Product Name</label>
                        <input type="text" className="form-control" id="productName" name="productName" placeholder="Product Name"
                            value={product.productName} onChange={handleProductInputClick} />
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2 ">Brand</label>
                        <input type="text" className="form-control" id="brand" name="brand" placeholder="Brand"
                            value={product.brand} onChange={handleProductInputClick} />
                    </div>
                </div>

                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2 ">Price</label>
                        <input type="number" className="form-control" id="price" name="price" placeholder="Price"
                            value={product.price} onChange={handleProductInputClick} onKeyUp={calDiscountPrice} />
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2 ">Discount Percentage</label>
                        <input type="number" className="form-control" id="discountPercentage" name="discountPercentage" placeholder="Discount Percentage"
                            value={product.discountPercentage} onChange={handleProductInputClick} onKeyUp={calDiscountPrice} />
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Discount Price</label>
                        <input type="number" readOnly className="form-control" id="discountPrice" name="discountPrice" placeholder="Discount Price"
                            value={product.discountPrice} onChange={handleProductInputClick} />
                    </div>
                </div>

                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Status</label>
                        {/* <input type="text" className="form-control" id="status" name="status" placeholder="Status" /> */}
                        <select className="form-select" id="status" name="status" placeholder="Status" value={product.status} onChange={handleProductInputClick}>
                            <option value="">Select Product Status</option>
                            <option value="new">New</option>
                            <option value="popular">Popular</option>
                            <option value="hot">Hot</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2 ">Quantity</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Quantity"
                            value={product.quantity} onChange={handleProductInputClick} />
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex"></div>
                </div>

                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-12 flex-column d-flex">
                        <label className="form-control-label px-2">Image</label>
                        <input type="text" className="form-control image" id="image" name="image" placeholder="Image"
                            value={product.image} onChange={handleProductInputClick} />
                    </div>
                </div>
                <hr></hr>

                <h5>Descriptions</h5>
                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-2">Water Resistance</label>
                        <select className="form-select" id="dWaterResistance" name="dWaterResistance" placeholder="Water Resistance"
                            value={product.dWaterResistance} onChange={handleDescriptionsInputClick}>
                            <option value="">Select Water Resistance</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-2">Material Type</label>
                        <select className="form-select" id="dMaterialType" name="dMaterialType" placeholder="Material Type"
                            value={product.dMaterialType} onChange={handleDescriptionsInputClick}>
                            <option value="">Select Product Material Type</option>
                            <option value="leather">Leather</option>
                            <option value="synthetic">Synthetic</option>
                            <option value="rubber">Rubber</option>
                            <option value="canvas">Canvas</option>
                            <option value="mesh">Mesh</option>
                            <option value="plastic">Plastic</option>
                        </select>
                    </div>


                </div>

                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-2 ">Origin of Country</label>
                        <input type="text" className="form-control" id="dOrigin" name="dOrigin" placeholder="Origin of Country"
                            value={product.dOrigin} onChange={handleDescriptionsInputClick} />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-2 ">Product Weight</label>
                        <input type="number" className="form-control" id="dWeight" name="dWeight" placeholder="Product Weight"
                            value={product.dWeight} onChange={handleDescriptionsInputClick} />
                    </div>
                </div>

                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-12 flex-column d-flex">
                        <label className="form-control-label px-2 ">Product Description</label>
                        <textarea type="text" rows={3} className="form-control" id="dDescription" name="dDescription" placeholder="Product Description"
                            value={product.dDescription} onChange={handleDescriptionsInputClick} />
                    </div>
                </div>
                <hr></hr>

                <h5>Category</h5>
                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Top Level Category</label>
                        <select className="form-select" id="topLevelCategory" name="topLevelCategory" placeholder="Top Level Category"
                            value={product.topLevelCategory} onChange={handleCategoryInputClick}>
                            <option value="">Select Top Level Category</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Second Level Category</label>
                        <select className="form-select" id="secondLevelCategory" name="secondLevelCategory" placeholder="Second Level Category"
                            value={product.secondLevelCategory} onChange={handleCategoryInputClick}>
                            <option value="">Select Second Level Category</option>
                            <option value="shoes">Shoes</option>
                            <option value="sandals">Sandals</option>
                            <option value="slippers">Slippers</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Third Level Category</label>
                        <select className="form-select" id="thirdLevelCategory" name="thirdLevelCategory" placeholder="Third Level Category"
                            value={product.category.thirdLevelCategory} onChange={handleCategoryInputClick}>
                            <option value="">Select Third Level Category</option>
                            {product.category.secondLevelCategory === "shoes" && (
                                <>
                                    <option value="running shoe">Running Shoes</option>
                                    <option value="walking shoe">Walking Shoes</option>
                                    <option value="casual shoe">Casual Shoes</option>
                                    <option value="sports shoe">Sports Shoes</option>
                                    <option value="sneakers">Sneakers</option>
                                </>
                            )}
                            {product.category.secondLevelCategory === "sandals" && (
                                <>
                                    <option value="casual">Casual</option>
                                    <option value="clogs">Clogs</option>
                                </>
                            )}
                            {product.category.secondLevelCategory === "slippers" && (
                                <>
                                    <option value="flipFlops">Flip Flops</option>
                                    <option value="slides">Slides</option>
                                </>
                            )}
                        </select>
                    </div>

                </div>
                <hr></hr>

                <h5>Size</h5>
                <button type='button' className='btn btn-secondary' onClick={handleAddSize}>Add Size</button>

                {[...Array(sizeCount)].map((_, index) => (
                    <div key={index} className="row justify-content-center text-left">
                        <div className="form-group col-lg-5 col-md-4 col-sm-4 flex-column d-flex">
                            <label className="form-control-label px-2">Size {index + 1}</label>
                            <input type="number" className="form-control" id={`sizeType-${index}`} name={`sizeType-${index}`} placeholder="Size Type"
                                value={product.sizeId[index]?.sizeType || ''} onChange={(e) => handleSizeInputClick(index, e)} />
                        </div>
                        <div className="form-group col-lg-5 col-md-4 col-sm-4 flex-column d-flex">
                            <label className="form-control-label px-2">Quantity {index + 1}</label>
                            <input type="number" className="form-control" id={`sizeQuantity-${index}`} name={`sizeQuantity-${index}`} placeholder="Size Quantity"
                                value={product.sizeId[index]?.sizeQuantity || ''} onChange={(e) => handleSizeInputClick(index, e)} />
                        </div>
                        <div className="form-group col-lg-2 col-md-4 col-sm-4 flex-column d-flex">
                            <button type='button' className='btn btn-danger removeBtn' onClick={() => handleRemoveSize(index)}>Remove Size</button>
                        </div>

                    </div>
                ))}
                <hr></hr>


                <h5>Colors</h5>
                <button type='button' className='btn btn-secondary' onClick={handleAddColor}>Add Color</button>

                {[...Array(colorCount)].map((_, index) => (
                    <div key={index} className="row justify-content-center text-left">
                        <div className="form-group col-lg-5 col-md-4 col-sm-4 flex-column d-flex ">
                            <label className="form-control-label px-2">Color {index + 1}</label>
                            <input type="text" className="form-control" id={`colorName-${index}`} name={`colorName-${index}`} placeholder="Color Name"
                                value={product.colorId[index]?.colorName || ''} onChange={(e) => handleColorInputClick(index, e)} />
                        </div>
                        <div className="form-group col-lg-2 col-md-4 col-sm-4 flex-column d-flex ">
                            <button type='button' className='btn btn-danger removeBtn' onClick={() => handleRemoveColor(index)}>Remove Color</button>
                        </div>
                        <div className="form-group col-lg-5 col-md-4 col-sm-4 flex-column d-flex"></div>
                    </div>
                ))}

                <hr></hr>
                <div >
                    <button type="submit" className="btn btn-primary mb-3 mt-2" onClick={AddProducts}>Add Product</button>
                </div>

            </form>
        </div>
    )
}

export default AddProduct
