import React from "react";
import { movies } from "../data";

function Movies() {
  return(<div>
    <h1>Movies Page</h1>
    {movies.map((item)=>(
    <div>
    <div>Name:{item.title}</div>
    <div>Time:{item.time}</div>
    <h3>Genres</h3>
    <ul>
      
    </ul>
    </div>
  ))}</div>)
}

export default Movies;
