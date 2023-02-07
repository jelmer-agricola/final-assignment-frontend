import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "../../components/Watchlist/MediaTitleCard";
import '../../components/Watchlist/Watchlist.css'

const Favorites = () => {
    const { favorites } =  useContext(GlobalContext);

    return (
        <div className="media-title-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading"> Movies</h1>
                </div>

                {favorites.length > 0 ? (
                    <div className="media-title-grid">
                        {favorites.map((mediaTitle) => (
                            <MediaTitleCard mediaTitle={mediaTitle} key={mediaTitle.id} type="favorites" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your list! Add some!</h2>
                )}
            </div>
        </div>
    // <h1>hoi</h1>
    );
};

export default Favorites;