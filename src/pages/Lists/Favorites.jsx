import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {Link} from "react-router-dom";
import MediaTitleCard from '../../components/MediaTitleCard/MediaTitleCard';
import './Lists.css'

const Favorites = () => {
    const {favorites} = useContext(GlobalContext);

    return (
        <>
            <section className="outer-content-container">
                <section className="inner-content-container">
                    <h3> Don't know what to watch and too tired to use the searchbar <Link to="/moods">click
                        here</Link> and we will give you suggestions based on your mood.
                    </h3>
                    <p className="list__control-description">You can click the left arrow icon to send a movie or serie
                        back to your watchlist. And use the cross to delete it from your watchlist. The symbols appear
                        when you hover over the poster with your mouse.</p>
                </section>
            </section>

            <section className="outer-content-container">
                <section className="inner-content-container">
                    {favorites.length > 0 && (
                        <div>
                            <h2 className="list__heading-list">Your most favorite movies & series</h2>
                        </div>
                    )}
                    {favorites.length > 0 ? (
                        <div className="media-title-grid">
                            {favorites.map((mediaTitle) => (
                                <MediaTitleCard mediaTitle={mediaTitle} key={mediaTitle.id} type="favorites"/>
                            ))}
                        </div>
                    ) : (
                        <h2>No movies or series in your Favorites! <Link to="/add">Add some!</Link></h2>
                    )}
                </section>
            </section>
        </>
    );
};

export default Favorites;