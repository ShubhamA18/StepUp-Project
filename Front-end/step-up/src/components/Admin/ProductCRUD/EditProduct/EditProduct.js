import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const nav = useNavigate()
    const { id } = useParams();

    const [product, setProduct] = useState({
        productId: '',
        productName: '',
        brand: '',
        quantity: '',
        price: '',
        discountPercentage: '',
        discountPrice: '',
        image: '',
        image: '',
        status: '',
        description: {
            dId: '',
            dMaterialType: '',
            dWaterResistance: '',
            dOrigin: '',
            dWeight: '',
            dDescription: ''
        },
        category: {
            categoryId: '',
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
        const price = parseFloat(product.price); // Access directly from product
        const discountPercentage = parseFloat(product.discountPercentage);
        const discountPrice1 = (price * discountPercentage) / 100;
        const discountPrice = price - discountPrice1;
    
        setProduct(prevUser => ({
            ...prevUser,
            discountPrice: discountPrice.toString() // Update discountPrice directly in product
        }));
    }


    const [sizeCount, setSizeCount] = useState(0);
    const handleAddSize = () => {
        setSizeCount(prevCount => prevCount + 1);
    };
    const handleRemoveSize = (indexToRemove) => {
        setSizeCount(prevCount => prevCount - 1);
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
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value // Update top-level properties directly
        }));
    };

    const handleDescriptionsInputClick = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            description: { // Update description nested object
                ...prevProduct.description,
                [name]: value
            }
        }));
    };

    const handleCategoryInputChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            category: {
                ...prevProduct.category,
                [name]: value
            }
        }));
    };

    // const handleSizeInputClick = (index, event) => {
    //     const { name, value } = event.target;
    //     const [fieldName, fieldIndex] = name.split('-'); // Extract field name and index from the name attribute
    //     setProduct(prevProduct => {
    //         const updatedSizes = [...prevProduct.sizes];
    //         const sizeIndex = parseInt(fieldIndex);
    //         if (!isNaN(sizeIndex)) { // Check if the fieldIndex is a valid number
    //             if (!updatedSizes[sizeIndex]) {
    //                 updatedSizes[sizeIndex] = {}; // Create a new object if it doesn't exist
    //             }
    //             updatedSizes[sizeIndex] = { ...updatedSizes[sizeIndex], [fieldName]: value }; // Update the specific field
    //         }
    //         return { ...prevProduct, sizes: updatedSizes };
    //     });
    // };

    const handleSizeInputChange = (index, field, value) => {
        const updatedSizes = [...product.sizeId];
        updatedSizes[index] = { ...updatedSizes[index], [field]: value };
        setProduct(prevProduct => ({
            ...prevProduct,
            sizeId: updatedSizes
        }));
    };

    // const handleColorInputClick = (index, event) => {
    //     const { name, value } = event.target;
    //     const [fieldName, fieldIndex] = name.split('-'); // Extract field name and index from the name attribute
    //     setProduct(prevProduct => {
    //         const updatedColors = [...prevProduct.colors];
    //         const colorIndex = parseInt(fieldIndex);
    //         if (!isNaN(colorIndex)) { // Check if the fieldIndex is a valid number
    //             if (!updatedColors[colorIndex]) {
    //                 updatedColors[colorIndex] = {}; // Create a new object if it doesn't exist
    //             }
    //             updatedColors[colorIndex] = { ...updatedColors[colorIndex], [fieldName]: value }; // Update the specific field
    //         }
    //         return { ...prevProduct, colors: updatedColors };
    //     });
    // };

    const handleColorInputChange = (index, field, value) => {
        const updatedColors = [...product.colorId];
        updatedColors[index] = { ...updatedColors[index], [field]: value };
        setProduct(prevProduct => ({
            ...prevProduct,
            colorId: updatedColors
        }));
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/api/product/getProductById/${id}`).then((res) => {
            // console.log(res.data)
            setProduct(res.data)
            setSizeCount(res.data.sizeId.length);
            setColorCount(res.data.colorId.length);
        }).catch((err) => {

        })
    }, [])

    const updateProduct = (event) => {
        event.preventDefault();
        // console.log(product)
        axios.put(`http://localhost:8080/api/product/updateProduct/${id}`, product).then(() => {
            window.alert("Product Update Successfully")
            nav("/admin/product")
        }).catch((err) => { })
    }

    return (
        <div className='container addProduct'>
            <h2>Edit Product</h2>
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
                            value={product.description.dWaterResistance} onChange={handleDescriptionsInputClick}>
                            <option value="">Select Water Resistance</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-2">Material Type</label>
                        <select className="form-select" id="dMaterialType" name="dMaterialType" placeholder="Material Type"
                            value={product.description.dMaterialType} onChange={handleDescriptionsInputClick}>
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
                            value={product.description.dOrigin} onChange={handleDescriptionsInputClick} />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-2 ">Product Weight</label>
                        <input type="number" className="form-control" id="dWeight" name="dWeight" placeholder="Product Weight"
                            value={product.description.dWeight} onChange={handleDescriptionsInputClick} />
                    </div>
                </div>

                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-12 flex-column d-flex">
                        <label className="form-control-label px-2 ">Product Description</label>
                        <textarea type="text" rows={3} className="form-control" id="dDescription" name="dDescription" placeholder="Product Description"
                            value={product.description.dDescription} onChange={handleDescriptionsInputClick} />
                    </div>
                </div>
                <hr></hr>

                <h5>Category</h5>
                <div className="row justify-content-center text-left">
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Top Level Category</label>
                        <select className="form-select" id="topLevelCategory" name="topLevelCategory" placeholder="Top Level Category"
                            value={product.category.topLevelCategory} onChange={handleCategoryInputChange}>
                            <option value="">Select Top Level Category</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Second Level Category</label>
                        <select className="form-select" id="secondLevelCategory" name="secondLevelCategory" placeholder="Second Level Category"
                            value={product.category.secondLevelCategory} onChange={handleCategoryInputChange}>
                            <option value="">Select Second Level Category</option>
                            <option value="shoes">Shoes</option>
                            <option value="sandals">Sandals</option>
                            <option value="slippers">Slippers</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-2">Third Level Category</label>
                        <select className="form-select" id="thirdLevelCategory" name="thirdLevelCategory" placeholder="Third Level Category"
                            value={product.category.thirdLevelCategory} onChange={handleCategoryInputChange}>
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
                                value={product.sizeId[index]?.sizeType || ''}
                                onChange={(e) => handleSizeInputChange(index, 'sizeType', e.target.value)} />
                        </div>
                        <div className="form-group col-lg-5 col-md-4 col-sm-4 flex-column d-flex">
                            <label className="form-control-label px-2">Quantity {index + 1}</label>
                            <input type="number" className="form-control" id={`sizeQuantity-${index}`} name={`sizeQuantity-${index}`} placeholder="Size Quantity"
                                value={product.sizeId[index]?.sizeQuantity || ''}
                                onChange={(e) => handleSizeInputChange(index, 'sizeQuantity', e.target.value)}
                            />
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
                                value={product.colorId[index]?.colorName || ''}
                                onChange={(e) => handleColorInputChange(index, 'colorName', e.target.value)} />
                        </div>
                        <div className="form-group col-lg-2 col-md-4 col-sm-4 flex-column d-flex ">
                            <button type='button' className='btn btn-danger removeBtn' onClick={() => handleRemoveColor(index)}>Remove Color</button>
                        </div>
                        <div className="form-group col-lg-5 col-md-4 col-sm-4 flex-column d-flex"></div>
                    </div>
                ))}

                <hr></hr>
                <div >
                    <button type="submit" className="btn btn-primary mb-3 mt-2" onClick={updateProduct}>Update Product</button>
                </div>

            </form>
        </div>
    )
}

export default EditProduct
