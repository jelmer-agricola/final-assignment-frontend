// Function that returns State data
export default (state, action) => {
    switch (action.type) {
        case "ADD_TITLE_TO_WATCHLIST":
            //return existing  state
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE_TITLE_FROM_WATCHLIST":
            //  returning existing state
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (mediaTitle) => mediaTitle.id !== action.payload
                ),
            }

        case "ADD_TITLE_TO_FAVORITES":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (mediaTitle) => mediaTitle.id !== action.payload.id
                ),
                favorites: [action.payload, ...state.favorites],
                jelmer: 'HALLO',
            };

        default:
            return state;
    }
};