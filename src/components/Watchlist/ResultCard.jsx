import React from 'react';

const ResultCard = ({title}) => {
    return (
        <div className="result-card">
<div className="poster-wrapper">
    <img src={`https://image.tmdb.org/t/p/w200${title.poster_path}`} alt={`{title.title || title.name}`}/>
</div>
        </div>
    );
};
//GESTOPT OP 17:24 Ga verder op 28:42

export default ResultCard;