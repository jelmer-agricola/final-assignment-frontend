import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "../../components/Watchlist/MediaTitleCard";
import '../../components/Watchlist/Watchlist.css' ;

const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (


        <div className="view-height">
        <section className="outer-content-container">
            <div className="inner-content-container">
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

        </section>
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