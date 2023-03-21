import React from 'react';

const AppWrapper = ({ children }) => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL +"/assets/brand/images/astro.jpg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default AppWrapper;
