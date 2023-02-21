import React from 'react';
import GenreMoodButton from "../../components/GenreMoodComponents/GenreMoodButton";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import useFetch from "../../hooks/useFetch";
import ResultCard from "../../components/Watchlist/ResultCard";
import GenreButtons from "../../components/Button/GenreButtons";
import {useNavigate} from "react-router-dom";



const Sad =() => {
    const navigate = useNavigate();

    const { data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `35, 18, 10751`,
            sort_by: 'vote_average.desc',
            'vote_count.gte': 1000,
            page: 1,
        }, {}

    );

    console.log(data.results) ;
    console.log(data,catchError, isLoading);



    return (
<main>
<section className="outer-content-container">
    <div className="inner-content-container genre-btns">
      <GenreButtons/>
    </div>
</section>


            {data.results && (
                <div>
                    <h2>Results:</h2>
                    <ul>
                        {data.results.slice(0, 10).map((mediaTitle) => (
                                <li key={mediaTitle.id}>
                                    <p className="title">
                                        {mediaTitle.title || mediaTitle.name}
                                    </p>
                                    <ResultCard mediaTitle={mediaTitle}></ResultCard>
                                </li>
                            )
                        )}
                    </ul>

                </div>
            )}
            <GenreForm/>
</main>
);
};

export default Sad;