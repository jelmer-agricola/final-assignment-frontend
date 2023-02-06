import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import MediaTitleCard from "./MediaTitleCard";

const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div className={"media-title-page"}>

            {/* container*/}
            <div>
                {/*header*/}
                <div>
                    <h1 className="heading"> My Watchlist
                    </h1>

                </div>
                {}
                {watchlist.length}
                {watchlist.map((mediaTitle) => (
                    <MediaTitleCard mediaTitle={mediaTitle}/>
                ))}
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