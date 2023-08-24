import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Actors Page</h1>
    {directors.map((director)=>(
      <div>
        <h3>Name:{director.name}</h3>
        <ul>
          <li>{director.movies[0]}</li>
          <li>{director.movies[1]}</li>
          <li>{director.movies[2]}</li>
        </ul>

      </div>
    ))}
    </div>;
}

export default Directors;
