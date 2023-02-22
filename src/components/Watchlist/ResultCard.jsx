import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import './Watchlist.css';
import Button from "../Button/Button";
import {roundToOneDecimal} from "../../helpers/rountToOneDecimal";


const ResultCard = ({mediaTitle}) => {
    const {addMediaTitleToWatchlist, watchlist, favorites, addMediaTitleToFavorites} = useContext(GlobalContext);

    let storedMediaTitle = watchlist.find(o => o.id === mediaTitle.id);
    //if there is a movie or series found the watchlist will be disabled if not the title can be added to the watchlist in case it is false.
    let storedMediaTitleFavorites = favorites.find(o => o.id === mediaTitle.id);

    const watchlistDisabled = storedMediaTitle
        ? true
        : storedMediaTitleFavorites
            ? true
            : false;

    const favoritesDisabled = storedMediaTitleFavorites ? true : false;

    const voteAverage = roundToOneDecimal(mediaTitle.vote_average);


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
                    <div>{mediaTitle.overview}</div>
                    <h4 className="release-date">  {mediaTitle.release_date || mediaTitle.first_air_date}</h4>
                    <h4>Vote Average: {voteAverage}</h4>

                </div>
                <div className="controls">

                    <Button
                        children="Add to Watchlist"
                        onClick={() => addMediaTitleToWatchlist(mediaTitle)}
                        disabled={watchlistDisabled}
                        className="add-btn"
                    />

                    <Button
                        children="Add to Favorites"
                        onClick={() => addMediaTitleToFavorites(mediaTitle)}
                        disabled={favoritesDisabled}
                        className="add-btn"
                    />

                </div>
            </div>

        </article>
    );
};


export default ResultCard;
