import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "./MediaTitleCard";
import './Watchlist.css' ;

const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div className="media-title-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading"> My Watchlist</h1>
                </div>

                {watchlist.length > 0 ? (
                    <div className="media-title-grid">
                    {watchlist.map((mediaTitle) => (
                            <MediaTitleCard mediaTitle={mediaTitle} key={mediaTitle.id} type="watchlist"/>
                        ))}
                               </div>
                ) : (
                    <h2 className= "no-media-titles">No movies or series in your watchlist add some!</h2>
                )
                }
            </div>

        </div>
//         <div>
//             <h1>Watchlist page</h1>
//             {watchlist.map((mediaTitle) =>(
// <h4>{mediaTitle.title || mediaTitle.name}</h4>
//             ))}
//         </div>
    );
};

export default Watchlist;