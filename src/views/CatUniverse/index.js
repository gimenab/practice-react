import React, { useState } from 'react';
import CatUniverseUser from 'src/components/CatUniverseUser';
import CatUniversePanel from 'src/components/CatUniversePanel';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';
import './index.scss';

function CatUniverse() {
  const [userName, setUserName] = useState('my user name');

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div className="panel-information">
      <Header />
      <PageTitle name="Welcome to Cat Universe" />
      <CatUniversePanel name={userName} />
      <CatUniverseUser changeUserName={changeUserName} />
    </div>
  );
}

export default CatUniverse;
