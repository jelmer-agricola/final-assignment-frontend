import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/GenreMoodButton.jsx/ResultSectionMoods";


const InLove = () => {

    const {data, catchError, isLoading} = useFetch(
        'https://api.themoviedb.org/3/discover/movie',
        {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `35, 10749`,
            include_adult: false,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        },
    );


    return (
        <>
            {isLoading && <p>Loading Lovy Dovy movies.. </p>}
            {catchError && <p>Something went wrong...</p>}
            <GenreMoodButtons/>
            <h2>This page is the romantic equivalent of a box of chocolates - you never know what you're going to
                get.</h2>
            <ResultsSectionMood data={data}/>

        </>

    );
};

export default InLove;