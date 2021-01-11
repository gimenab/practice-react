import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const header = {
  ContentType: 'application/json',
  'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
};

function MyDumbComponent({
 ...rest
}) {
  const { id } = useParams('');
  const history = useHistory('');
  const [name, setName] = useState('Felipe');

    const handleClick = () => {
        console.log(name, ' my name')
        setName('Gimena')
        console.log(name, ' your name')
    }

  return (
    <div className="container">
        <button onClick={handleClick}>abc</button>
        {name}
    </div>
  );
}

export default MyDumbComponent;
