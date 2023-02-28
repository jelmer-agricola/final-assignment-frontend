import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/ResultSectionMoods/ResultSectionMoods";

const Angry = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `28, 12, 10751`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );
    if (isLoading) {
        return <div>Loading Angry Movies...</div>;
    }
    if (catchError) {
        return <div>Error: {catchError}</div>;
    }

    return (
        <>
            <GenreMoodButtons/>
            <h2>Buckle up, because this page is about to take you on a wild, rage-filled ride</h2>
            <ResultsSectionMood data={data}/>
        </>

    );
};

export default Angry;