import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/GenreMoodButton.jsx/ResultSectionMoods";


const Happy = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `12, 10749`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );

    return (
        <>
            { isLoading && <p>Loading Happy Movies, to either make you happy or to enhance your feeling of happiness....</p>}
            { catchError && <p>Something went wrong...</p>}
            <GenreMoodButtons/>
            <h2>Get ready for some sunshine on your screen - this page is like a virtual ray of sunshine!</h2>
            <ResultsSectionMood data={data}/>
        </>
    );
};

export default Happy;