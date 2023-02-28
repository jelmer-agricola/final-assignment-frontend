import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "../../components/WatchlistComponents/MediaTitleCard";
import '../../components/WatchlistComponents/WatchlistComponents.css'
import {Link} from "react-router-dom";

const Favorites = () => {
    const {favorites} = useContext(GlobalContext);

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h3> Don't know what to watch and too lazy to use the searchbar <Link to="/moods">click here</Link> and we will give you suggestions based on your mood.
                    </h3>
                    <p>You can click the left arrow to send a movie or serie back to your watchlist. And use the cross to delete it from your watchlist. The symbols appear when you hover over the poster with your mouse.</p>
                </div>
            </section>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="header">
                        <h2 className="heading"> Your most favorite movies & series</h2>
                    </div>

                    {favorites.length > 0 ? (
                        <div className="media-title-grid">
                            {favorites.map((mediaTitle) => (
                                <MediaTitleCard mediaTitle={mediaTitle} key={mediaTitle.id} type="favorites"/>
                            ))}
                        </div>
                    ) : (
                        <h2 className="no-movies">No movies in your list! Add some!</h2>
                    )}
                </div>
            </section>
        </>
    );
};

export default Favorites;