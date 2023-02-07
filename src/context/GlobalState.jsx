import React, {createContext, useEffect, useReducer} from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],

    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
};

//Create context
export const GlobalContext = createContext(initialState);

// Provider component evt nog omschrijven zonder props
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log('STATE', state)

    //triggered when state changes and anything is added to the watchlist
    useEffect(() => {
        // console.log(state.watchlist)
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    useEffect(() => {
        // console.log(state.watchlist)
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state])



    // actions
    const addMediaTitleToWatchlist = mediaTitle => {
        dispatch({type: "ADD_TITLE_TO_WATCHLIST", payload: mediaTitle});
    };

    const removeMediaTitleFromWatchList = (id) => {
        dispatch({type: "REMOVE_TITLE_FROM_WATCHLIST", payload: id});
    };

    const addMediaTitleToFavorites = mediaTitle => {
        dispatch({type: "ADD_TITLE_TO_FAVORITES", payload: mediaTitle});
    };

    const contextData = {
        ...state,
        addMediaTitleToWatchlist: addMediaTitleToWatchlist,
        removeMediaTitleFromWatchList: removeMediaTitleFromWatchList,
        addMediaTitleToFavorites: addMediaTitleToFavorites,
    }

    return (
        <GlobalContext.Provider value={contextData}>
            {props.children}
        </GlobalContext.Provider>
    )
};