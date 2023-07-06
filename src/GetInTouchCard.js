import React from "react";


export default function GetInTouchCard({ imageUrl, city })
{

return( <div className="col-4">
<div className="card" style={{ width: "18rem" }}>
  <img src={imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{city}</h5>
    <p className="card-text">
      {city === "London"
        ? "London is a beautiful city"
        : city === "Paris" ? "Beautiful":"sndkjanskdnask"}
    </p>
    <a  href="https://www.google.com/"
      className={
        city === "London"
          ? "btn btn-danger"
          : city === "Paris"
          ? "btn btn-warning"
          : "btn btn-success"
      }
    >
      Go somewhere
    </a>
  </div>
</div>
</div>);

}