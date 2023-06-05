import React from 'react';
import Card from '../../../ui-components/Cards/Card';
import './HomeCardList.css';

function HomeCardList() {
  const homeCards = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      title: "Astronomy Club Kosova",
      description: "Description of the picture above",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
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
