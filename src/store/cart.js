//action function

const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const INCREMENT_COUNT = 'cart/updateCount'

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

export const updateCount = (id, count) => {
    return {
        type: INCREMENT_COUNT,
        id,
        count
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

        case INCREMENT_COUNT:
            const newIncrementState = { ...state };
            newIncrementState[action.id].count = action.count;

            return newIncrementState;

        default:
            return state;
    }
}

export default cartReducer;
