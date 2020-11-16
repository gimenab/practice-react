/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import './index.scss';

function DetailsBox(props) {
  return (
    <Paper elevation={3} className="paper flex-container">{props.children}</Paper>
  );
}
export default DetailsBox;
