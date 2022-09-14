import React, { useState, useEffect } from 'react'

import "./Row.css"
import instance from '../component/instance'


const base_url = "https://image.tmdb.org/t/p/original/"



function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData();
    }, [])
    console.log("movie data is", movies)
    return (
        <div className='row'>
            <h2 >{title}</h2>

            <div className='row_posters'>
                {movies.map((movie) => (
                    <img
                        className='row_poster'
                        alt={movie.name}
                        src={`${base_url}${movie.backdrop_path}`}
                    />
                ))} 

            </div>
        </div>
    )
}

export default Row