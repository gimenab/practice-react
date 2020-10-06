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


    const handleChangePage = (event, pageValue) => {
        setPage(pageValue)
        axios.get(`https://api.thecatapi.com/v1/breeds?limit=5&page=${pageValue}`)
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

    const handleChangeRowsPerPage = (event) => {
        console.log(event.target.value, '<<<<<<<<<<<<<<<<<<<<<')
        // Usar el event.target.value para modificar la llamada al API y obtener los n primeros registros de la tabla

        // Una vez que traemos los resultados, guardarlos en el state correspondiente
        
    }

    // const handleChangePage = (event, pageValue) => {
    //     setPage(pageValue)
    //     axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + pageValue)
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

    // const handleChangePage = (event, pageValue) => {
    //     setPage(pageValue)
    //     axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + pageValue)
    //     .then(response => {
    //         let newArray = [...catBreeds, ...response.data]
    //         setCatBreeds(newArray)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // const handleChangePage = async (event, pageValue) => {
    //     setPage(pageValue)
    //     let response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=' + pageValue)
    //     let newArray = [...catBreeds, ...response.data]
    //     setCatBreeds(newArray)
    // }
   
    return (
        <div>
            <h1>Cat Breeds</h1>
            <TableBreeds
                breeds={catBreeds}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
            />
        </div>
    )
}

export default CatBreeds;
