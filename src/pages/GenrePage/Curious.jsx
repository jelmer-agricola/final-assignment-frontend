import React from 'react';
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import useFetch from "../../hooks/useFetch";
import GenreButtons from "../../components/Button/GenreButtons";
import ResultsSectionMood from "./ResultSectionMood";


const Angry = () => {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `99`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
            // slice: (0,10),
        }, {}
    );

    console.log(data, catchError, isLoading);


    return (
        <main>
            <GenreButtons/>
            <h2>CuriousPage</h2>
            <ResultsSectionMood data={data}/>
        </main>

    );
};

export default Angry;