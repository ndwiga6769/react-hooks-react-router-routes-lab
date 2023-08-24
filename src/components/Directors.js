import React from "react";
import { directors } from "../data";

function Directors() {
  return (<div>
    <h1>Directors Page</h1>
    {directors.map((director,index)=>(
      <div key={index}>
        <h3>Name:{director.name}</h3>
        <ul>
          Movies:{director.movies.map((i,index)=>(
            <li key = {index}>{i}</li>
          ))}
        </ul>

      </div>
    ))}
    </div>
  )
}

export default Directors;
