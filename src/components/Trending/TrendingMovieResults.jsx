import React from "react";
import {roundToOneDecimal} from "../../helpers/roundToOneDecimal";
import {limitCharacters} from "../../helpers/limitCharacters";

const TrendingMovieResults = ({mediaTitle}) => {

    const voteAverage = roundToOneDecimal(mediaTitle.vote_average);



    return (
        <article className="result-card">
            <div className="poster-wrapper">
                {mediaTitle.poster_path ? (
                        <img className="poster"
                            src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`}
                             alt={`{title.title || title.name}`}
                        />
                    )
                    : (
                        <div className="filler-poster">Filler Poster</div>
                    )
                }
            </div>

            <div className="info">
                <div>
                    <h4 className="release-date">Release date: {mediaTitle.release_date}</h4>
                    <div className="trending-info">
                    {limitCharacters(mediaTitle.overview, 250)}
                    </div>
                    <h4 className="vote-average">Vote Average: {voteAverage}</h4>
                </div>
            </div>
        </article>
    );
};


export default TrendingMovieResults;
