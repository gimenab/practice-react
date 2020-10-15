import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import './filter.scss';


function Filter() {
    return ( 
        
        <div className="search">
            <FormControl className="input-search" id="input-search">
                <InputLabel htmlFor="input-with-icon-adornment">Search a breed</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    }
                />
            </FormControl>
        </div>
        
    )
}

export default Filter
