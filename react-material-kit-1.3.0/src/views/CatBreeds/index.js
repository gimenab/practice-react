import React , {useState, useEffect} from 'react';
import axios from 'axios';
import TableBreeds from './TableBreeds';
import BreedList from './BreedList';
import Filter from './Filter';
import './index.scss'

function CatBreeds() {

const [catBreeds, setCatBreeds] = useState([]);
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);
const [inputSearch, setSearch] = useState('');

useEffect(()=> {
    axios.get(`https://api.thecatapi.com/v1/breeds?limit=5&page=0`)
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
        axios.get(`https://api.thecatapi.com/v1/breeds?limit=${rowsPerPage}&page=${page}`)
        .then(response => {
            let newArray = []
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
        setRowsPerPage(event.target.value);
        setPage(0);
        axios.get(`https://api.thecatapi.com/v1/breeds?limit=${event.target.value}&page=0`)
        .then(response => {
            let newArray = []
            response.data.forEach((element) => {
                newArray.push(element)
            })
            setCatBreeds(newArray)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onElementScroll = () => {
        let elementToWatchForScroll = document.getElementsByClassName("list").item(0); 
    
        var scrollY = elementToWatchForScroll.scrollHeight - elementToWatchForScroll.scrollTop; 
        var height = elementToWatchForScroll.offsetHeight;
        var offset = height - scrollY;
    
        if ((offset == 0 || offset == 1)) {
            handleChangePage('', page + 1)
        }
    }

    const handleInput = (event) => {
        setSearch( event.target.value);
        filterBreeds(catBreeds, inputSearch);
        console.log(filterBreeds(catBreeds, event.target.value))

    }
    
    const filterBreeds = (breeds, inputSearch)=> {
        return breeds.filter(function(breed) {
        return breed.name.toLowerCase().includes(inputSearch.toLowerCase()); 
    })
    
    }
    

    return (
        <div>
            <h3 className="title">Cat Breeds</h3>
            <Filter 
            handleInput={handleInput}
            inputValue={inputSearch}
            filterBreeds={filterBreeds}
            />
            <TableBreeds
                breeds={catBreeds}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPage={rowsPerPage}
                page={page}
                handleInput={handleInput}
                inputValue={inputSearch}
                filterBreeds={filterBreeds}
            />
            <BreedList 
                breeds={catBreeds}
                rowsPerPage={rowsPerPage}
                page={page}
                onElementScroll={onElementScroll}
                handleInput={handleInput}
                inputValue={inputSearch}
                filterBreeds={filterBreeds}/>
                
        </div>
    )
}

export default CatBreeds;
