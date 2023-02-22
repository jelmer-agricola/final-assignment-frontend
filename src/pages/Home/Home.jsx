import React from 'react';
import useFetch from "../../hooks/useFetch";

const Home = () => {


    const {data, catchError, isLoading} = useFetch('https://api.themoviedb.org/3/trending/all/day', 'GET', {
            api_key: process.env.REACT_APP_API_KEY,

        }, {}
    );
    console.log(data.results)

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
            <h1>homepage</h1>
<h2>Trending movies/series right now</h2>



        </div>

    </section>
    );
};

export default Home;