import React from 'react'
import GetInTouchCard from "./GetInTouchCard";
import data from "./data.json";
export default function GetInTouch() {
  return (

    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          {data.map((value, index) => {
            return (
              <GetInTouchCard
                key={index}
                imageUrl={value.imageUrl}
                city={value.city}
              />
            );
          })}
        </div>
      </div>
    </section>

  );

}