import React from 'react';
import './index.scss';

function CatUniversePanel({ name }) {
  return (
    <div className="panel-information">
      <h3>Panel Component</h3>
      <h4>{name}</h4>

    </div>
  );
}

export default CatUniversePanel;