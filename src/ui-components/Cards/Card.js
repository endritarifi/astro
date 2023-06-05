import React from "react";

function Card(card) {
  return (
        <div className="col-md-4 text-center">
          <div className="card" style={{ backgroundColor: "inherit" }}>
            <img className="card-img-top" src={card.imgSrc} alt="" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
  );
}

export default Card;
