import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/ResultSectionMoods/ResultSectionMoods";


const Angry = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `99`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );



    return (
        <>
            { isLoading && <p>Loading Movies to satisfy your curiosity....</p>}
            { catchError && <p>Something went wrong...</p>}
            <GenreMoodButtons/>
            <h2>This page is like a treasure trove of hidden gems - you never know what you might discover.</h2>
            <ResultsSectionMood data={data}/>
        </>

    );
};

export default Angry;