import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import './Watchlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faTimes, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const MediaTitleControls = ({type, mediaTitle}) => {
    const {
        removeMediaTitleFromWatchList,
        addMediaTitleToFavorites,
        moveToWatchList,
        removeFromFavorites
    } = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>

                    <button
                        className="ctrl-btn"
                        onClick={() => addMediaTitleToFavorites(mediaTitle)}
                    >
                        <FontAwesomeIcon icon={faHeart}/>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeMediaTitleFromWatchList(mediaTitle.id)}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </>
            )}

            {type === 'favorites' && (
                <>
                    <button
                        className="ctrl-btn"
                        onClick={() => moveToWatchList (mediaTitle)}
                    >

                        <FontAwesomeIcon icon={faEyeSlash}/>
                    </button>
                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromFavorites(mediaTitle.id)}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>

                </>
            )}

        </div>
    );
};

export default MediaTitleControls;