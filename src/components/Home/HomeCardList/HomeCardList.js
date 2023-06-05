import React from 'react';
import Card from '../../../ui-components/Cards/Card';
import './HomeCardList.css';

function HomeCardList() {
  const homeCards = [
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1673622980273-afc609720e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1673622980273-afc609720e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1673622980273-afc609720e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
  ];

  return (
    <div className="row mx-n0">
      {homeCards.map((card, index) => (
        <Card {...card} key={index} className="card" />
      ))}
    </div>
  );
}

export default HomeCardList;
