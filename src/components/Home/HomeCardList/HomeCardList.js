import React from 'react';
import Card from '../../../ui-components/Cards/Card';
import CardWithTitle from '../../../ui-components/Cards/CardWithTitle';

function HomeCardList() {
  const homeCards = [
    {
      imgSrc:
        "https://cff2.earth.com/uploads/2018/11/16031958/what-is-astronomy-and-geophysics.jpg",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
    {
      imgSrc:
        "https://cff2.earth.com/uploads/2018/11/16031958/what-is-astronomy-and-geophysics.jpg",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
    {
      imgSrc:
        "https://cff2.earth.com/uploads/2018/11/16031958/what-is-astronomy-and-geophysics.jpg",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
  ];

    return (
      <div className="row" style={{ "--bs-gutter-x": "0rem" }}>
      {homeCards.map((card, index) => (
          <Card {...card} key={index}/>
      ))}
      {homeCards.map((card, index) => (
          <CardWithTitle {...card} key={index}/>
      ))}
      </div>
      
    );
  }
  

export default HomeCardList;