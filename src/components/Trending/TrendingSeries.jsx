import React from "react";
import useFetch from "../../hooks/useFetch";
import TrendingSerieResults from "./TrendingSerieResults";
import "./Trending.css";

function TrendingSeries() {
    const { data, catchError, isLoading } = useFetch(
        "https://api.themoviedb.org/3/trending/tv/day",
        {api_key: process.env.REACT_APP_API_KEY}
);

    return (
        <>
            {isLoading && <p>Loading the Trending results...</p>}
            {catchError && <p>Something went wrong...</p>}
            <section className="trending-series">
                <h2 className="trending-header">Top 5 Trending Series</h2>
                {data.results && (
                    <ul>
                        {data.results
                            .slice(0, 5)
                            .filter((serie) => serie.name)
                            .map((serie) => (
                                <li className="media-title" key={serie.id}>
                                    {serie.name}
                                    <TrendingSerieResults mediaTitle={serie} />
                                </li>
                            ))}
                    </ul>
                )}
            </section>
        </>
    );
}

export default TrendingSeries;