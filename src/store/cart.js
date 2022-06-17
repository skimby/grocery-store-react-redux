//action function

const ADD = 'cart/ADD';

export const addToCart = (id) => {
    return {
        type: ADD,
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
        default:
            return state;
    }
}

export default cartReducer;
