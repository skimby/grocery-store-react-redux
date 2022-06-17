//action function

const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';

export const addToCart = (id) => {
    return {
        type: ADD,
        id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE,
        id
    }
}

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD:
            const obj = {
                ...state,
                [action.id]: { id: action.id, count: 1 }
            }
            return obj
        case REMOVE:
            // console.log(state)
            const copy = state;
            delete copy[action.id];
            return copy;
        default:
            return state;
    }
}

export default cartReducer;
