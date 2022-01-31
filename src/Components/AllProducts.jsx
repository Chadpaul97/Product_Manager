import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const [products, setProductsData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res);
                setProductsData(res.data);
            })
            .catch(err => {
                console.log(err);
                setProductsData(err);
                setProductsData("")
            })

    }, [])

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productID)
            .then(res => {
                removeFromDom(productID)
            })
            .catch(err => console.error(err));
    }
    const removeFromDom = productId => {
        setProductsData(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product, i) => {
                    return <div key={i}><span > <Link to={`/api/products/${product._id}`}> {product.title}</Link></span> 
                    
                    <Link to={`/api/products/update/${product._id}`}><button>Edit</button></Link>

                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></div>
                })
            }
        </div>
                )
}
export default AllProducts;