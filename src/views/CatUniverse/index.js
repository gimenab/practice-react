import React, { useState } from 'react';
import CatUniverseUser from 'src/components/CatUniverseUser';
import CatUniversePanel from 'src/components/CatUniversePanel';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';
import { Button } from '@material-ui/core';
import './index.scss';

function CatUniverse() {
  const intro = 'my nickename is: ';
  const [userDescription, setUserDescription] = useState('');
  const name = 'Harry Flan';


  const printMyUserName = () => {
    setUserDescription(`${name}. I  was born in 2020`);
  };
  console.log(`${intro}${userDescription}`);
  return (
    <div className="panel-information">
      <Header />
      <PageTitle name="Welcome to Cat Universe" />

      <Button
        variant="contained"
        color="primary"
        onClick={printMyUserName}
      >
Add descrption
      </Button>
      <p>Button to update user data</p>
      <CatUniversePanel name={userDescription} />
      <CatUniverseUser intro={intro} name={name} />
    </div>
  );
}

export default CatUniverse;
