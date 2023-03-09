import React, {createContext, useEffect, useReducer} from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
};

//Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //triggered when state changes and anything is added to the watchlist


    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state])


    // actions (function describes what the action is)
    //add media to watchlist
    const addMediaTitleToWatchlist = mediaTitle => {
        dispatch({type: "ADD_TITLE_TO_WATCHLIST", payload: mediaTitle});
    };
    //remove title from watchlist
    const removeMediaTitleFromWatchList = (id) => {
        dispatch({type: "REMOVE_TITLE_FROM_WATCHLIST", payload: id});
    };

    //add media to Lists
    const addMediaTitleToFavorites = mediaTitle => {
        dispatch({type: "ADD_TITLE_TO_FAVORITES", payload: mediaTitle});
    };

    //Move from favorites to watchlist
    const moveToWatchList = mediaTitle => {
        dispatch({type: "MOVE_TO_WATCHLIST", payload: mediaTitle});
    };

    //delete form favorites
    const removeFromFavorites = id => {
        dispatch({type: "REMOVE_FROM_FAVORITES", payload: id})
    }


    const contextData = {
        ...state,
        addMediaTitleToWatchlist,
        removeMediaTitleFromWatchList,
        addMediaTitleToFavorites,
        moveToWatchList,
        removeFromFavorites,
    }

    return (
        <GlobalContext.Provider value={contextData}>
            {children}
        </GlobalContext.Provider>
    )
};