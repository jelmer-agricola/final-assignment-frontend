import React from "react";
import {roundToOneDecimal} from "../../helpers/roundToOneDecimal";
import {limitCharacters} from "../../helpers/limitCharacters";

const TrendingSerieResults = ({mediaTitle}) => {

    const voteAverage = roundToOneDecimal(mediaTitle.vote_average);

    return (
        <article className="result-card">
            <figure className="poster-wrapper">
                {mediaTitle.poster_path ? (
                        <img
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`}
                            alt={`{title.title || title.name}`}
                        />
                    )
                    : (
                        <img className="filler-poster">Filler Poster</img>
                    )
                }
            </figure>

            <section className="info">
                <section>
                    <h4 className="release-date">First Aired: {mediaTitle.first_air_date}</h4>
                    <p className="trending-info">
                        {limitCharacters(mediaTitle.overview, 250)}
                    </p>
                    <h4 className="vote-average">Vote Average: {voteAverage}</h4>
                </section>

            </section>

        </article>
    );
};


export default TrendingSerieResults;
