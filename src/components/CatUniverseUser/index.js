import { Button, FormControl } from '@material-ui/core';
import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import './index.scss';

function CatUniverseUser({ name, intro }) {
  const [resume, setResume] = useState('');
  // const sendMyResume = (event) => {
  //   setResume(event);
  // };

  const handleInput = (event) => {
    setResume(event.target.value);
  }
  console.log(resume);
  return (
    <div className="panel-information">
      <h3>User Component</h3>
      <p>{intro}</p>
      <p>{name}</p>
      <p>{resume}</p>


      <p>Add a short description about you</p>
    
      <FormControl>
        <Input
          type="text"
          onChange={handleInput}
        />
       
      </FormControl>

    </div>
  );
}

export default CatUniverseUser;
