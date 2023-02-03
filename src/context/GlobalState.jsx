import React, {createContext, useEffect, useReducer} from 'react';
import AppReducer from "./AppReducer";
// initial state
const initialState = {watchlist: []};

//Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const addMediaTitleToWatchlist = mediaTitle => {
        dispatch({type: "ADD_TITLE_TO_WATCHLIST", payload: mediaTitle});
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                addMediaTitleToWatchlist : addMediaTitleToWatchlist,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
};