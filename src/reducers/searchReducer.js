import { ACTION } from '../actions/searchTypes';

const initialState = '';

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SEARCH:
            return state = action.payload
        default:
            return state
    }
}