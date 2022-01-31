import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Single = (props) => {
    const {_id} = useParams();
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


    return (
        
        <div><h1>Hey</h1>
            <p>Title: {singleItem.title}</p>
            <p>Price: {singleItem.price}</p>
            <p>Description: {singleItem.description}</p>
        </div>
    )
}
export default Single;