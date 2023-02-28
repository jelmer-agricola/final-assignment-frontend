import React from 'react';
import GenreForm from "../../components/GenreForm/GenreForm";
import useFetch from "../../hooks/useFetch";
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import ResultsSectionMood from "../../components/ResultSectionMoods/ResultSectionMoods";


const Happy = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `12, 10749, 10749`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
            // slice: (0,10),
        }, {}
    );

    console.log(data.results);
    console.log(data, catchError, isLoading);


    return (
        <>
            <GenreMoodButtons/>
            <h2>Get ready for some sunshine on your screen - this page is like a virtual ray of sunshine!</h2>
            <ResultsSectionMood data={data}/>
        </>
    );
};

export default Happy;