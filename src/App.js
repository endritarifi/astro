import React from 'react';
import './App.css';
import AppWrapper from './AppWrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeBody from './components/Home/HomeBody/HomeBody';
import HomeCardList from './components/Home/HomeCardList/HomeCardList';
import SliderComponent from './components/Home/HomeSlider/SliderComponent';
import HomeText from './components/Home/HomeText/HomeText.js';


const App = () => {
  return (
    <AppWrapper>
      <Header />
      <HomeBody />
      <HomeCardList/>
      <SliderComponent/>
      <HomeText/>
      <Footer/>
    </AppWrapper>
  );
};

export default App;

