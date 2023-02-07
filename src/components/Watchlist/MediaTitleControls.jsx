import React from 'react';
import './Watchlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const MediaTitleControls = ({mediaTitle, type}) => {
    return (
        <div className="inner-card-controls">
            {/*{type === "watchlist" && (*/}
            <>

                <button className="ctrl-btn">
                    <FontAwesomeIcon icon={faEye}/>
                </button>
                <button
                    className="ctrl-btn">
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </>
            {/*)}*/}
        </div>
    );
};

export default MediaTitleControls;