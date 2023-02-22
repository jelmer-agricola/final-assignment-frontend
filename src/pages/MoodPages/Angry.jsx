import React from 'react';
import useFetch from "../../hooks/useFetch";
import GenreButtons from "../../components/GenreButton.jsx/GenreButtons";
import ResultsSectionMood from "../../components/GenreMoodComponents/ResultSectionMood";

const Angry = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `28, 12, 10751`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}
    );

    console.log(data, catchError, isLoading);

    return (
        <main>
            <GenreButtons/>
            <h2> Angry page I hope these movies make you less angry</h2>
            <ResultsSectionMood data={data}/>
        </main>

    );
};

export default Angry;