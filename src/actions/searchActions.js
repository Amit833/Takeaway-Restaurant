import {ACTION} from '../actions/searchTypes';

export const search = (searchKeyword) => {
    return {type: ACTION.SEARCH, payload: searchKeyword}
}