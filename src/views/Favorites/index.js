import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';
import Post from 'src/components/Posts';
import axios from 'axios';
import Feed from 'src/components/Feed';


function Favorites() {


  return (
    <div className="container">

      <Header><PageTitle name="All Cats" /></Header>

    
    </div>
  );

}

export default Favorites;
