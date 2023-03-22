import React from "react";

function CardWithTitle(card) {
  return (
        <div className="col-md-4 text-center">
        <h5 className="card-title">{card.title}</h5>
          <div className="card" style={{ backgroundColor: "red" }}>
            <img className="card-img-top" src={card.imgSrc} alt="" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
  );
}

export default CardWithTitle;
