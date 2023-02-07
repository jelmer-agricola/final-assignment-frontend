import React from 'react';
import MediaTitleControls from "./MediaTitleControls";
import './Watchlist.css';

// type evt wel/ niet voor watched list
const MediaTitleCard = ({mediaTitle, type}) => {
    return (

        <article className="media-title-card">
            <div className="overlay"></div>

            {/*{mediaTitle.poster_path ? (*/}
                <img src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`}
                     alt={`{title.title || title.name}`}
                />
            {/*) : (*/}
            {/*    <div className="filler-poster">Filler Poster</div>*/}
            {/*)}*/}

            <MediaTitleControls type={type} mediaTitle={mediaTitle}/>
        </article>


    );
};

export default MediaTitleCard;