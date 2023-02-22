import React from 'react';
import TrendingMovies from '../../components/Trending/TrendingMovies'
import TrendingSeries from "../../components/Trending/TrendingSeries";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
                <p>Welcome to your favorite website for movies and series login to see your watchlist and favoriteslist
                    or Register to start creating one. </p>
                <h2> Don't know what to watch by giving us your mood we can select the best movies for each mood for You! <Link to="/moods">click here</Link></h2>
                <div className="trending-container">
                    <TrendingMovies/>
                    <TrendingSeries/>
                </div>
            </div>

        </section>);
};

export default Home;