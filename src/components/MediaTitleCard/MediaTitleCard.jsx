import React from 'react';
import MediaTitleControls from "./MediaTitleControls";
import './MediaTitleCard.css';

const MediaTitleCard = ({mediaTitle, type}) => {
    return (

        <article className="media-title-card">
            <div className="overlay"></div>

                <img className="media-title-img" src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`}
                     alt={`{title.title || title.name}`}
                />

            <MediaTitleControls type={type} mediaTitle={mediaTitle}/>
        </article>


    );
};

export default MediaTitleCard;