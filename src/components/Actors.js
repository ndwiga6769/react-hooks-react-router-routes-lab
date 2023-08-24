import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
        <div>
          {actors.map((actor)=>(
            <div>
            <div><h2>Name:{actor.name}</h2></div>
            <div>
              <ul>
              <li>{actor.movies[0]}</li>
              <li>{actor.movies[1]}</li>
              <li>{actor.movies[2]}</li>
              </ul>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Actors;
