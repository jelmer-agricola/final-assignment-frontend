import React from 'react';
import './Watchlist.css';

const MediaTitleControls = ({mediaTitle, type}) => {
    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-button">
                        <i className="fa-fw far fa-eye">test </i>
                    </button>
                    <button className="ctrl-button">
                        <i className="fa-fw fa-times"></i>
                    </button>

                </>

            )}
        </div>
    );
};

export default MediaTitleControls;