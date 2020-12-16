/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Detail from 'src/components/DetailsBox/Detail';
import './index.scss';


function DetailsBox2({ details }) {

  return (
    <Paper elevation={3} className="paper flex-container">
      {details.map((detail) => (
        <Detail key={detail.id} title={detail.title} text={detail.text} />
      ))}
    </Paper>
  );
}
export default DetailsBox2;
