import React from 'react';
import useFetch from "../../hooks/useFetch";
import TrendingSerieResults from "./TrendingSerieResults";
import './Trending.css'


function TrendingSeries() {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/trending/tv/day', 'GET', {
            api_key: process.env.REACT_APP_API_KEY
        }, {}
    );
    console.log(data, catchError, isLoading);
    if (isLoading) {
        return <div>Loading Trending Series...</div>;
    }
    if (catchError) {
        return <div>Error: {catchError}</div>;
    }

    return (
        <>
            <div className="trending-series">
                <h2 className="trending-header">Top 5 Trending Series</h2>

                {data.results && (
                    <ul>
                        {data.results.slice(0, 5).filter(serie => serie.name)
                            .map(serie => (
                                <li
                                    className="media-title"
                                    key={serie.id}
                                >
                                    {serie.name}
                                    <TrendingSerieResults mediaTitle={serie}/>
                                </li>

                            ))}
                    </ul>
                )}
            </div>
        </>

    );
}

export default TrendingSeries;