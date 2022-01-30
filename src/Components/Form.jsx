import React, {useState,useEffect}from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'

export default function Form(props) {
    const[title, setTitle] = useState([]);
    const[price, setPrice] = useState([]);
    const[description, setDescription] = useState([]);
    const[products, setProductsData] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        axios.get('http://localhost:8000/product/')
        .then(res=>{
            console.log(res.data);
            setProductsData(res.data.results);
        })
        .catch(err=>console.log(err))
    },[])

    const formHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/product/new',{
            title,
            price,
            description
        })
        .then(res=>{
            
            console.log(res);
        })
        .catch(err => {console.log(err)})


    }
    return (
        <div>
            <div className=''>
                <h1>Product Manager</h1>
            </div>
            <form onSubmit={formHandler}>
                <div className='container mt-3 d-flex flex-column w-25'>
                    <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} value={title}/><br />
                    <input type="number" placeholder='price' min={1} onChange={(e) => setPrice(e.target.value)} value={price} /><br />
                    <input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} value={description}/><br />
                    <button type='submit'>Create</button>
                </div>
            </form>
            <div className='container mt-3'>
                <h2>All Products</h2>
                <p></p>
            </div>

        </div>)
}
