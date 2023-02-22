import React from 'react';
import useFetch from "../../hooks/useFetch";
import '../../pages/Home/Home'
import TrendingSerieResults from "./TrendingSerieResults";

function TrendingSeries() {

    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/trending/tv/day', 'GET', {
            api_key: process.env.REACT_APP_API_KEY
        }, {}
    );
    console.log(data, catchError, isLoading);

    return (
   <>
       <div className= "trending-series">
       <h2>Trending Series</h2>

                {data.results && (
                    <ul >
                        {data.results.slice(0,5).filter(serie => serie.name)
                            .map(serie => (
                                <li key={serie.id}>{serie.name}
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