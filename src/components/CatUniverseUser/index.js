import { FormControl } from '@material-ui/core';
import React from 'react';
import Input from '@material-ui/core/Input';
import './index.scss';

function CatUniverseUser({ changeUserName }) {
  return (
    <div className="panel-information">
      <h3>User Component</h3>
      <p>Enter your new username</p>
      <FormControl>
        <Input
          type="text"
          onChange={changeUserName}
        />
      </FormControl>
    </div>
  );
}

export default CatUniverseUser;
