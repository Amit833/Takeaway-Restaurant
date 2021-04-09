import {ACTION} from '../actions/basketTypes';

const initialState = {
    items: []
}

export const takeawayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_ITEM:
            const exist = state.items.find((item) => item.id === action.payload.id);
            console.log('exist is false', action.payload);
            if (!exist) {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, qty: 1 }],
                };
            } else
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : { ...item }
                    ),
                };
        case ACTION.DECREASE_ITEM:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty = 1 } : { ...item }
                )
            }
        case ACTION.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        case ACTION.EMPTY_BASKET:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}