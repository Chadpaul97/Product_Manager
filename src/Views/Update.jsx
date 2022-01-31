import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Update = (props) => {
    const {_id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [singleItem, setSingleItem] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + _id)
            .then(res => {
                console.log(res);
                setSingleItem(res.data.product);
                
            })
            .catch(err =>{
                console.log(err);
                setSingleItem("");
            })
    }, [_id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + _id, 
            singleItem)
            .then(res => {
                setSingleItem(res.data)
                console.log(res);
                history.push("/")
            })
            .catch(err => console.error(err));
    }

    const onChangeHandler = (event) => {
        setSingleItem({
            ...singleItem,
            [event.target.name]: event.target.value
        })
    }


    return (
        
        <div>
            <h1>Update</h1>
            <form onSubmit={updateProduct}>
                <div className='container mt-3 d-flex flex-column w-25'>
                    <input type="text" placeholder='title' onChange={onChangeHandler} value={singleItem.title} name="title"/><br />
                    <input type="number" placeholder='price' min={1} onChange={onChangeHandler} value={singleItem.price} name="price"/><br />
                    <input type="text" placeholder='description' onChange={onChangeHandler} value={singleItem.description} name="description"/><br />
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}
export default Update;

