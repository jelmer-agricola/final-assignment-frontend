import React from 'react';

// type evt wel/ niet voor watched list
const MediaTitleCard = ({mediaTitle, type}) => {
    return (

        <div className="mediatitle-card">
            {mediaTitle.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`}
                     alt={`{title.title || title.name}`}
                />
            ) : (
                <div className="filler-poster">Filler Poster</div>
            )}
        </div>


    );
};

export default MediaTitleCard;