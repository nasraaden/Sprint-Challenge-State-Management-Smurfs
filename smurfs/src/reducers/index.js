import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE} from "../actions/index"

const initialState = {
    smurf: null,
    isFetching: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isFetching: false,
                error: ""
            }
        case FETCH_SMURF_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
