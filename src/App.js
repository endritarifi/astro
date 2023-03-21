import React from 'react';
import './App.css';
import AppWrapper from './AppWrapper';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Card from './Card'

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Card/>
      <Footer/>
    </AppWrapper>
  );
};

export default App;

