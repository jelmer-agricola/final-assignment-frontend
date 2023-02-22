import React from 'react';
import useFetch from "../../hooks/useFetch";
import '../../pages/Home/Home'
import TrendingMovieResults from "./TrendingMovieResults";

function TrendingMovies() {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/trending/movie/day', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            }, {}
    );
    console.log(data, catchError, isLoading);

    return (
<>
    <div className= "trending-movies">
    <h2>Trending movies</h2>
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