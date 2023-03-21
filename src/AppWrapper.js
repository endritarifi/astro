import React from 'react';
import BackgroundImage from './astro.jpg';

const AppWrapper = ({ children }) => {
  const style = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default AppWrapper;
