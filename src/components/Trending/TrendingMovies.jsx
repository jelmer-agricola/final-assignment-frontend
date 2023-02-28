import React from 'react';
import useFetch from "../../hooks/useFetch";
import TrendingMovieResults from "./TrendingMovieResults";
import './Trending.css'

function TrendingMovies() {


    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/trending/movie/day', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            }, {}
    );
    console.log(data, catchError, isLoading);

    return (
<>
    <div className= "trending-movies">
    <h2 className="trending-header">Top 5 Trending movies</h2>
            {data.results && (
                <ul >
                {data.results.slice(0,5).filter(movie => movie.title)
                        .map(movie => (
                            <li key={movie.id}>{movie.title}
                            <TrendingMovieResults mediaTitle={movie}/>
                            </li>

                        ))}
                </ul>
            )}
    </div>
</>

    );
}

export default TrendingMovies;