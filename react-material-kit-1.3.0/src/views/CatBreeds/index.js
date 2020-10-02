import React , {useState, useEffect} from 'react';
import axios from 'axios';
import TableBreeds from './TableBreeds';

function CatBreeds() {
const [catBreeds, setCatBreeds] = useState([]);
const [page, setPage] = useState(0);

    useEffect(()=> {
        axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=0')
        .then(res => {
            console.log(res);
            setCatBreeds(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleChangePage = (event, page) => {
        setPage(page)
        axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + page)
        .then(response => {
            let newArray = []
            catBreeds.forEach((element) => {
                newArray.push(element)
            })
            response.data.forEach((element) => {
                newArray.push(element)
            })
            setCatBreeds(newArray)
        })
        .catch(err => {
            console.log(err)
        })
    }

    // const handleChangePage = (event, page) => {
    //     setPage(page)
    //     axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + page)
    //     .then(response => {
    //         let newArray = Array.from(catBreeds)
    //         response.data.forEach((element) => {
    //             newArray.push(element)
    //         })
    //         setCatBreeds(newArray)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // const handleChangePage = (event, page) => {
    //     setPage(page)
    //     axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + page)
    //     .then(response => {
    //         let newArray = [...catBreeds, ...response.data]
    //         setCatBreeds(newArray)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // const handleChangePage = async (event, page) => {
    //     setPage(page)
    //     let response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + page)
    //     let newArray = [...catBreeds, ...response.data]
    //     setCatBreeds(newArray)
    // }
   
    return (
        <div>
            <h1>Cat Breeds</h1>
            <TableBreeds
                breeds={catBreeds}
                handleChangePage={handleChangePage}
                page={page}
            />
        </div>
    )
}

export default CatBreeds;
