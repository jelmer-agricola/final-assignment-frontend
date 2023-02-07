import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import './Watchlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const MediaTitleControls = ({mediaTitle, type}) => {
    const{removeMediaTitleFromWatchList, addMediaTitleToFavorites} = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {/*{type === "watchlist" && (*/}
            <>

                <button
                    className="ctrl-btn"
                    onClick={()=> addMediaTitleToFavorites(mediaTitle)}
                >
                    <FontAwesomeIcon icon={faEye}/>
                </button>

                <button
                    className="ctrl-btn"
                    onClick={()=> removeMediaTitleFromWatchList(mediaTitle.id)}
                    >
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </>
            {/*)}*/}
        </div>
    );
};

export default MediaTitleControls;