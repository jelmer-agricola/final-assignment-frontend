// Function that returns State data
export default (state, action) => {
    switch (action.type) {
        case "ADD_TITLE_TO_WATCHLIST":
            //return existing  state
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
        default:
            return state;
    }
};