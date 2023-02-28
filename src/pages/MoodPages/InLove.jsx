import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/ResultSectionMoods/ResultSectionMoods";


const InLove = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `35, 10751, 10402`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );
    if (isLoading) {
        return <div>Loading Lovely Movies...</div>;
    }
    if (catchError) {
        return <div>Error: {catchError}</div>;
    }



    return (
        <>
            <GenreMoodButtons/>
            <h2>This page is the romantic equivalent of a box of chocolates - you never know what you're going to get.</h2>
            <ResultsSectionMood data={data}/>

        </>

    );
};

export default InLove;