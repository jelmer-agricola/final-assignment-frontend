import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import './WatchlistComponents.css';


import Button from "../Button/Button";


const MediaTitleControls = ({type, mediaTitle}) => {
    const {
        removeMediaTitleFromWatchList,
        addMediaTitleToFavorites,
        moveToWatchList,
        removeFromFavorites
    }
        = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <Button
                        className="ctrl-btn"
                        onClick={() => addMediaTitleToFavorites(mediaTitle)}
                        icon={Button.Heart}
                    />
                    <Button
                        className="ctrl-btn"
                        onClick={() => removeMediaTitleFromWatchList(mediaTitle.id)}
                        icon={Button.Times}
                    />
                </>
            )}

            {type === 'favorites' && (
                <>
                    <Button
                        className="ctrl-btn"
                        onClick={() => moveToWatchList(mediaTitle)}
                        icon={Button.EyeSlash}
                    />
                    <Button
                        className="ctrl-btn"
                        onClick={() => removeFromFavorites(mediaTitle.id)}
                        icon={Button.Times}
                    />
                </>
            )}
        </div>
    );
};

export default MediaTitleControls;