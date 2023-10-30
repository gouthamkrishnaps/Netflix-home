import React, { useEffect } from 'react'
import './Banner.css';
import instance from '../instance';
import { useState } from 'react';

function Banner({fetchUrl}) {
    const [movies,setMovies]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async()=>{
        const {data} = await instance.get(fetchUrl)
        //console.log(data.results);
        setMovies(data.results[Math.floor(Math.random()*data.results.length)])//storing into state to get access out side the function
    }
    console.log(movies);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:"600px",backgroundImage:`url(${base_url}${movies?.backdrop_path}`,backgroundSize:'cover'}}>
        <div className="banner-content">
            <h1>{movies?.name}</h1>
            <a href="" className='btn btn-danger'>Play <i class="fa-solid fa-play" style={{color: '#ffffff',backgroundColor:'transparent'}}></i></a> <a href="" className='more-btn btn btn-outline-light'>More <i class="fa-solid fa-caret-down" style={{backgroundColor:'transparent'}}></i></a>
            <p>{movies?.overview?.slice(0,200)}...</p>
        </div>
    </div>
  )
}

export default Banner