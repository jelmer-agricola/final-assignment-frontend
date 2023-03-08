import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "../../components/MediaTitleCard/MediaTitleCard";
import './Watchlist.css'
import {Link} from "react-router-dom";


const Watchlist = () => {

    const {watchlist} = useContext(GlobalContext);
    return (


        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h3> Don't know what to watch and to tired to use the searchbar <Link to="/moods">click here</Link> and we will give you suggestions based on your mood.
                    </h3>
                    <p className="watchlist__control-description">You can click the heart icon to send a movie to your favorites. And use the cross to delete it from your favorites. The symbols appear when you hover over the poster with your mouse.</p>

                </div>
            </section>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    {watchlist.length > 0 &&(
                    <div >
                        <h2 className="watchlist__heading-list"> My Watchlist</h2>
                    </div>
                        )}


                    {watchlist.length > 0 ? (
                        <div className="media-title-grid">
                            {watchlist.map((mediaTitle) => (
                                <MediaTitleCard mediaTitle={mediaTitle} key={mediaTitle.id} type="watchlist"/>
                            ))}
                        </div>
                    ) : (
                        <h2> No movies or series in your watchlist <Link to="/add">Add some!</Link></h2>
                    )
                    }
                </div>

            </section>
        </>

    );
};

export default Watchlist;