import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import './Watchlist.css';
import Button from "../Button/Button";
// import { limitCharacters } from '../../helpers/LimitCharacters'


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

    const favoritesDisabled =storedMediaTitleFavorites ? true : false;


// minimaliseren aantal characters
    // const mediaTitleOverview = mediaTitle.overview;
    // const limitedOverview = limitCharacters(mediaTitleOverview);
    // console.log(limitedOverview);

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
                    {/*<div className="title">{mediaTitle.title}</div>*/}
                    <div>{mediaTitle.overview}</div>
                    <h4 className="release-date">  {mediaTitle.release_date || mediaTitle.first_air_date}</h4>
                </div>
                <div className="controls">



                    <Button
                        children="Add to Watchlist"
                        onClick={() => addMediaTitleToWatchlist(mediaTitle)}
                        disabled={watchlistDisabled}
                        className="add-btn"
                    />
                    {/*<button*/}
                    {/*    className="btn"*/}
                    {/*    disabled={watchlistDisabled}*/}
                    {/*    onClick={() => addMediaTitleToWatchlist(mediaTitle)}*/}
                    {/*>*/}
                    {/*    Add to Watchlist*/}
                    {/*</button>*/}


                    <Button
                        children="Add to Favorites"
                        onClick={() => addMediaTitleToFavorites(mediaTitle)}
                        disabled={favoritesDisabled}
                        className="add-btn"
                    />
                    {/*<button*/}
                    {/*    className="btn"*/}
                    {/*    disabled={favoritesDisabled}*/}
                    {/*    onClick={() => addMediaTitleToFavorites(mediaTitle)}*/}
                    {/*>*/}
                    {/*    Add to Favorites*/}
                    {/*</button>*/}

                </div>
            </div>

        </article>
    );
};


export default ResultCard;
// import React from 'react';
// const ResultCard = ({mediaTitle}) => {
//     let date = '';
//     if (mediaTitle.release_date) {
//         date = new Date(mediaTitle.release_date);
//     } else if (mediaTitle.first_air_date) {
//         date = new Date(mediaTitle.first_air_date);
//     }
//     const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
//
//     return (
//         <div className="result-card">
//             <div className="poster-wrapper">
//                 {mediaTitle.poster_path ? (
//                     <img src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`} alt={`{title.title || title.name}`}
//                     />
//                 ) : (
//                     <div className="filler-poster">Filler Poster</div>
//                 )}
//             </div>
//
//             <div className="info">
//                 <div className="header">
//                     <div className="title">{mediaTitle.title}</div>
//                     <h4 className="release-date"> Release date {formattedDate}</h4>
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default ResultCard;