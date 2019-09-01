import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";



const Featured = () => {
  return (
    <div>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">The Venue is on fire</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
