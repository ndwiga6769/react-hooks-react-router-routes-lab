import React from "react";
import { movies } from "../data";

function Movies(){
  return(
  <>
    <h1>Movies Page</h1>
    {movies.map((item,index)=>(
    <div key={index}>
    <p>Name:{item.title}</p>
    <p>Time:{item.time}</p>
    <ul>
    Genres:{item.genres.map((gen,index)=>(
            <li key={index}>{gen}</li>
          ))}
    </ul>
    </div>
  ))}</>)
}

export default Movies;
