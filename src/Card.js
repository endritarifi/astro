import React from "react";

function Card() {
  return (
    <div className="row" style={{ '--bs-gutter-x': '0rem' }}>
      <div className="col-md-4 text-center">
        <div className="card" style={{ backgroundColor: "transparent" }}>
          <img
            className="card-img-top"
            src="https://cff2.earth.com/uploads/2018/11/16031958/what-is-astronomy-and-geophysics.jpg"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Astronomy Club Kosova</h5>
            <p className="card-text">
              Description of the picture Above
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="card" style={{ backgroundColor: "transparent" }}>
          <img
            className="card-img-top"
            src="https://cff2.earth.com/uploads/2018/11/16031958/what-is-astronomy-and-geophysics.jpg"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Astronomy Club Kosova</h5>
            <p className="card-text">
              Description of the picture Above
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="card" style={{ backgroundColor: "transparent" }}>
          <img
            className="card-img-top"
            src="https://cff2.earth.com/uploads/2018/11/16031958/what-is-astronomy-and-geophysics.jpg"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Astronomy Club Kosova</h5>
            <p className="card-text">
              Description of the picture Above
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
