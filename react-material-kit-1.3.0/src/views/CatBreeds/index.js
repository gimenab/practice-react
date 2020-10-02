import React , {useState, useEffect} from 'react';
import axios from 'axios';
import TableBreeds from './TableBreeds';


function CatBreeds() {

const [catBreeds, setCatBreeds] = useState([]);
useEffect(()=> {
    axios.get('https://api.thecatapi.com/v1/breeds')
    .then(res => {
            console.log(res);
            setCatBreeds(res.data);
        
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            <h1>Cat Breeds</h1>
                <TableBreeds breeds={catBreeds}></TableBreeds>
            
        </div>
    )
}

export default CatBreeds;
