import React from 'react';
import './index.scss';

// eslint-disable-next-line react/prop-types
function Feed({ children }) {
  return (
    <div className="feed flex-container">
      {children}
    </div>
  );
}

export default Feed;
