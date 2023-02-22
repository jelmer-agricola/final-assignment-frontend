import React, {useState} from 'react';
import GenreMoodButton from "../../components/GenreMoodComponents/GenreMoodButton";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import useFetch from "../../hooks/useFetch";
import ResultCard from "../../components/Watchlist/ResultCard";
import GenreButtons from "../../components/GenreButton.jsx/GenreButtons";
import ResultsSectionMood from "./ResultSectionMood";


const InLove = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `35, 10751, 10402`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );

    console.log(data.results);
    console.log(data, catchError, isLoading);


    return (
        <main>
            <GenreButtons/>
            <h2>In love page</h2>
            <ResultsSectionMood data={data}/>

        </main>

    );
};

export default InLove;