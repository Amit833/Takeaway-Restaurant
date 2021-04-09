import {ACTION} from '../actions/basketTypes';

export const addItem = (item) => {
    return {type: ACTION.ADD_ITEM, payload: item}
}

export const deleteItem = (id) => {
    return {type: ACTION.DELETE_ITEM, payload: id}
}

export const emptyBasket = () => {
    return {type: ACTION.EMPTY_BASKET}
}

export const decreaseItem = (id) => {
    return {type: ACTION.DECREASE_ITEM, payload: id}
}