import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
        <div>
          {actors.map((actor,index)=>(
            <div key={index}>
            <h2>Name:{actor.name}</h2>
            
              <ul>
              Movies:{actor.movies.map((i,index)=>(
            <li key={index}>{i}</li>
          ))}
              </ul>
              
            </div>
          ))}
        </div>
    </div>
  )
}

export default Actors;
