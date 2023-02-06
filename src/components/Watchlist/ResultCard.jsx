import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import './Watchlist.css';


const ResultCard = ({mediaTitle}) => {
    const{addMediaTitleToWatchlist, watchlist} = useContext(GlobalContext);

    let storedMediaTitle = watchlist.find(o =>  o.id === mediaTitle.id);
    //if there is a movie or series found the watchlist will be disabled if not the title can be added to the watchlist in case it is false.
    const watchlistDisabled = storedMediaTitle ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {mediaTitle.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${mediaTitle.poster_path}`} alt={`{title.title || title.name}`}
                    />
                ) : (
                    <div className="filler-poster">Filler Poster</div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <div className="title">{mediaTitle.title}</div>
                    <h4 className="release-date">  {mediaTitle.release_date || mediaTitle.first_air_date}</h4>
                </div>
                <div className="controls">

                    <button
                        className="btn"
                        disabled={watchlistDisabled}
                        onClick={()=>addMediaTitleToWatchlist(mediaTitle)}
                    >
                        Add to Watchlist
                    </button>

                </div>
            </div>

        </div>
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