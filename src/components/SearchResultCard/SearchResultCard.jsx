import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import './SearchResultCard.css'
import Button from "../Button/Button";
import {roundToOneDecimal} from "../../helpers/roundToOneDecimal";


const SearchResultCard = ({mediaTitle}) => {
    const {addMediaTitleToWatchlist, watchlist, favorites, addMediaTitleToFavorites} = useContext(GlobalContext);

    let storedMediaTitle = watchlist.find(o => o.id === mediaTitle.id);
    //if there is a movie or series found the watchlist will be disabled if not the title can be added to the watchlist in case it is false.
    let storedMediaTitleFavorites = favorites.find(o => o.id === mediaTitle.id);

    const watchlistDisabled = storedMediaTitle
        ? true
        : storedMediaTitleFavorites
            ? true
            : false;

    const favoritesDisabled = !!storedMediaTitleFavorites;
    const voteAverage = roundToOneDecimal(mediaTitle.vote_average);


    return (
        <article className="result-card">
            <div>
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
                    <h4 className="release-date">
                        {mediaTitle.first_air_date && `First aired: ${mediaTitle.first_air_date}`}
                        {mediaTitle.release_date && `Release date: ${mediaTitle.release_date}`}
                    </h4>
                    <div>{mediaTitle.overview}</div>
                    <h4 className="vote-average">Vote Average: {voteAverage}</h4>

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


export default SearchResultCard;
