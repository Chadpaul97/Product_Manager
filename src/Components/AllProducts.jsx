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

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product, i) => {
                    return <div key={i}><span > <Link to={`/api/products/${product._id}`}> {product.title}</Link></span>  
                    <Link to={`/api/products/update/${product._id}`}><button>Edit</button></Link></div>
                })
            }
        </div>
                )
}
export default AllProducts;