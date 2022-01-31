import React, {useState}from 'react';
import axios from 'axios';

export default function Form(props) {
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");

    const formHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new',{
            title,
            price,
            description})
        .then(res=>{
            console.log(res);
            window.location.reload(false);
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
                    <input type="text" placeholder='title'  onChange={(e) => setTitle(e.target.value)} value={title} name="title"/><br />
                    <input type="number" placeholder='price' min={1} onChange={(e) => setPrice(e.target.value)} value={price} name="price" /><br />
                    <input type="text" placeholder='description'  onChange={(e) => setDescription(e.target.value)} value={description} name="description"/><br />
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>)
}
