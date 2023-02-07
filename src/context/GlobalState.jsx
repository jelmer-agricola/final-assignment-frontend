import React, {createContext, useEffect, useReducer} from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
};

//Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //triggered when state changes and anything is added to the watchlist
    useEffect(() => {
        // console.log(state.watchlist)
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    // actions
    const addMediaTitleToWatchlist = mediaTitle => {
        dispatch({type: "ADD_TITLE_TO_WATCHLIST", payload: mediaTitle});
    };

    const removeMediaTitleFromWatchList =(id) =>{
        dispatch({type: "REMOVE_TITLE_FROM_WATCHLIST", PALOAD: id});
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                // hieronder mogen ze 1 keer terugkomen.
                addMediaTitleToWatchlist: addMediaTitleToWatchlist,
                removeMediaTitleFromWatchList: removeMediaTitleFromWatchList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
};