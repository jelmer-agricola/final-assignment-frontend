import React from "react";

const TrendingSerieResults = ({mediaTitle}) => {
    //helperfunctie ??
    const voteAverage = mediaTitle.vote_average.toFixed(1);

    return (
        <article className="result-card">
            <div className="poster-wrapper">
                {mediaTitle.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`}
                             alt={`{title.title || title.name}`}
                        />
                    )
                    : (
                        <div className="filler-poster">Filler Poster</div>
                    )
                }
            </div>

            <div className="info">
                <div className="header">
                    <h4 className="release-date">First Aired:  {mediaTitle.first_air_date}</h4>
                    <div>{mediaTitle.overview}</div>
                    <h4>Vote Average: {voteAverage}</h4>
                </div>

            </div>

        </article>
    );
};


export default TrendingSerieResults;
