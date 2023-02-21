import React from 'react';
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import useFetch from "../../hooks/useFetch";
import ResultCard from "../../components/Watchlist/ResultCard";



const ResultsGenrePage =({children, primaryGenre, secondaryGenre, tertiaryGenre, quaternaryGenre, quinaryGenre }) => {

    const { data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/discover/movie', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,
            with_genres: `3518,10751`,
            sort_by: `${primaryGenre},${secondaryGenre},${tertiaryGenre},${quaternaryGenre},${quinaryGenre}`,
            'vote_count.gte': 1000,
            page: 1,
        }, {}

    );

    console.log(data.results) ;
    console.log(data,catchError, isLoading);



    return (
        <>
<button
    type="checkbox"

></button>
            <h1>{data.total_results}</h1>

            {data.results && (
                <div>
                    <h2>Results:</h2>
                    <ul>
                        {data.results.map((mediaTitle) => (
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

        </>

    );
};

export default ResultsGenrePage;