import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './MovieRow.css';

function MovieRow({title,fetchUrl,isPresent}) {
//jscode
//console.log(fetchUrl);
const [allMovies,setAllMovies]=useState()
const base_url = "https://image.tmdb.org/t/p/original/";

const fetchData = async()=>{
    const {data} = await instance.get(fetchUrl)
    //console.log(data.results);
    setAllMovies(data.results)//storing into state to get access out side the function
}

console.log(allMovies);
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='row'>
      <h3>{title}</h3>
      <div className='movie-row'>
        {
          allMovies?.map(item=>(
            <img className={`movie ${isPresent && 'movie_poster'}`}/* terinary */ src={`${base_url}${isPresent?item.poster_path:item.backdrop_path}`} alt="nope" />
          ))
        }
      </div>
      </div>
  )
}

export default MovieRow