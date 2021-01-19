import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import './filter.scss';

function Filter({ handleInput, inputValue }) {
  return (
    <div className="search">
      <FormControl className="input-search" id="input-search">
        <InputLabel htmlFor="input-with-icon-adornment">Search a breed</InputLabel>
        <Input
          type="text"
          id="input-with-icon-adornment"
          onChange={handleInput}
          value={inputValue}
          startAdornment={(
            <InputAdornment position="start">
           
            </InputAdornment>
                  )}
        />
      </FormControl>
    </div>
  );
}

export default Filter;
