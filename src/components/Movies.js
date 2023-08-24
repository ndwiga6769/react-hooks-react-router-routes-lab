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

      <li>{item.genres[0]}</li>
      <li>{item.genres[1]}</li>
      <li>{item.genres[2]}</li>
    </ul>
    </div>
  ))}</div>)
}

export default Movies;
