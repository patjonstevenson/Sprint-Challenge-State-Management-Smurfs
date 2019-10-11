import {
    FETCH_SMURFS,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_SMURF,
    POST_SUCCESS,
    POST_FAILURE
} from "../actions";


const initialState = {
    smurfs: [],
    fetching: false,
    fetchError: "",
    posting: false,
    postError: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                fetching: true,
                fetchError: ""
            }
        case FETCH_SUCCESS:
            console.log("Smurf data passed to reducer:\n", action.payload);
            return {
                ...state,
                fetching: false,
                fetchError: "",
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                fetchError: action.payload
            }
        case POST_SMURF:
            return {
                ...state,
                posting: true,
                postError: ""
            }
        case POST_SUCCESS:
            return {
                ...state,
                posting: false,
                postError: "",
                smurfs: action.payload
            }
        case POST_FAILURE:
            return {
                ...state,
                posting: false,
                postError: action.payload
            }
        default:
            return state;
    }
}

export default reducer;