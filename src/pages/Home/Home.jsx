import React from 'react';
import TrendingMovies from '../../components/Trending/TrendingMovies'
import TrendingSeries from "../../components/Trending/TrendingSeries";
import {Link} from "react-router-dom";
import './Home.css'


const Home = () => {

    return (
        <section className="outer-content-container">
            <section className="inner-content-container">
                <h1 className="homepage__header">Welcome to Your Favorite Movie and TV Series Website!</h1>
                <p className="homepage__intro-text">Looking for your next binge-worthy show? <Link to="/login">Sign
                    in</Link> to see your watchlist and favorites list, or <Link to="/signup">create an
                    account</Link> to start keeping track of all the movies and TV shows you love. Plus, with our search
                    feature, you can easily find movies and shows to match your mood. Whether you're in the mood for a
                    comedy, drama, action, or something in between, we've got you covered. So what are you waiting for?
                    Sign in or create an account now and start exploring!</p>

                <section className="trending-container">
                    <TrendingMovies/>
                    <TrendingSeries/>
                </section>
            </section>

        </section>
    );
};

export default Home;