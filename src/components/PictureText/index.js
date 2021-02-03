import { Favorite } from '@material-ui/icons';
import React from 'react';
import Favourite from 'src/components/Favourite';
import './index.scss';


function PictureText(url) {
  return (
    <div className="picture-text">
      <img
        className="picture"
        src={url}
        alt="cat favorite"
      />
      <Favourite />
    </div>
  );
}

export default PictureText;
