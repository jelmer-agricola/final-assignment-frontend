import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "../../components/Watchlist/MediaTitleCard";
import '../../components/Watchlist/Watchlist.css'
import {Link} from "react-router-dom";

const Favorites = () => {
    const { favorites } =  useContext(GlobalContext);

    return (
        <main>
            <h2> Don't know what to watch and too lazy to use the searchbar <Link to="/moods">click here</Link></h2>

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
        </main>
    );
};

export default Favorites;