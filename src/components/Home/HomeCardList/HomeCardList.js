import React from 'react';
import Card from '../../../ui-components/Cards/Card';

function HomeCardList() {
  const cards = [
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
      {cards.map((card, index) => (
          <Card {...card} key={index}/>
      ))}
      </div>
      
    );
  }
  

export default HomeCardList;