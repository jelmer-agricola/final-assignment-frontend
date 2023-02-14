import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "../../components/Watchlist/MediaTitleCard";
import '../../components/Watchlist/Watchlist.css'

const Favorites = () => {
    const { favorites } =  useContext(GlobalContext);

    return (
        <div className="view-height">
        <section className="outer-content-container">
            <div className="inner-content-container">
                <div className="header">
                    <h1 className="heading"> Your most favorite and dearest series</h1>
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
        </section>
        </div>
    // <h1>hoi</h1>
    );
};

export default Favorites;