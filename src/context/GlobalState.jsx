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
    //console log hieronder kan weg
    console.log('STATE', state)

    //triggered when state changes and anything is added to the watchlist

    // In useEffect check gaan inbouwen of de (watchlist/favorites) array een object heeft met een key value pair die overeen komt met de username
    // of key gelijk is aan username als dat zo is dan gebruik
    // met find (is wel exact match)
    // key favorites pakt en dat dan terug geeft als set item
    //



    useEffect(() => {
        // console.log(state.watchlist)
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    useEffect(() => {
        // console.log(state.watchlist)
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

    //add media to Favorites
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
        addMediaTitleToWatchlist: addMediaTitleToWatchlist,
        removeMediaTitleFromWatchList: removeMediaTitleFromWatchList,
        addMediaTitleToFavorites,
        moveToWatchList,
        removeFromFavorites,
    }

    return (
        <GlobalContext.Provider value={contextData}>
            {props.children}
        </GlobalContext.Provider>
    )
};