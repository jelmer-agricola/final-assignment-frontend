import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import './Watchlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faTimes, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";


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


                    {/*<button*/}
                    {/*    className="ctrl-btn"*/}
                    {/*    onClick={() => removeMediaTitleFromWatchList(mediaTitle.id)}*/}
                    {/*>*/}
                    {/*    <FontAwesomeIcon icon={faTimes}/>*/}
                    {/*</button>*/}
                </>
                )}

            {type === 'favorites' && (
                <>

                    <Button
                        className="ctrl-btn"
                        onClick={() => moveToWatchList(mediaTitle)}
                        icon={Button.EyeSlash}
                    />


                    {/*<button*/}
                    {/*    className="ctrl-btn"*/}
                    {/*    onClick={() => moveToWatchList(mediaTitle)}*/}
                    {/*>*/}

                    {/*    <FontAwesomeIcon icon={faEyeSlash}/>*/}
                    {/*</button>*/}


                    <Button
                        className="ctrl-btn"
                        onClick={() => removeFromFavorites(mediaTitle.id)}
                        icon={Button.Times}
                    />

                    {/*<button*/}
                    {/*    className="ctrl-btn"*/}
                    {/*    onClick={() => removeFromFavorites(mediaTitle.id)}*/}
                    {/*>*/}
                    {/*    <FontAwesomeIcon icon={faTimes}/>*/}
                    {/*</button>*/}

                </>
            )}

        </div>
    );
};

export default MediaTitleControls;