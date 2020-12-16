/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import './index.scss';

function DetailsBox({ children }) {
  return (
    <Paper elevation={3} className="paper flex-container">{children}</Paper>
  );
}
export default DetailsBox;
