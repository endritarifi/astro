import React from 'react';
import './App.css';
import AppWrapper from './AppWrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Home/HomeBody/HomeBody';
import HomeCardList from './components/Home/HomeCardList/HomeCardList';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <HomeCardList/>
      <Footer/>
    </AppWrapper>
  );
};

export default App;

