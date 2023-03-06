import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/ResultSectionMoods/ResultSectionMoods";


const Sad = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `35, 18, 10751`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );

    return (
        <>
            { isLoading && <p>Loading Movies to cure your sadness...</p>}
            { catchError && <p>Something went wrong...</p>}
            <GenreMoodButtons/>
            <h2>If you're feeling down, this page is like a virtual shoulder to cry on - it's okay to let it all out.</h2>
            <ResultsSectionMood data={data}/>
        </>
    );
};

export default Sad;