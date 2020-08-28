export const initialState = {
    basket: [],
    removedItem: null,
    addedItem: null,
    user: null,
};

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const RESET_REMOVED_ITEM = 'RESET_REMOVED_ITEM';
export const RESET_ADDED_ITEM = 'RESET_ADDED_ITEM';
export const SET_USER = 'SET_USER';

export const getBasketValue = (basket) => {
    return (basket?.reduce((total, curr) => (total+curr.price), 0)).toFixed(2);
}

function reducer(state, action) {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
                addedItem: action.item.title
            }
        case REMOVE_FROM_BASKET:
            let newBasket = [...state.basket];
            let index = state.basket.findIndex((item) => (item.id === action.id));
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket,
                removedItem: action.title
            }
        case RESET_REMOVED_ITEM:
            return {
                ...state,
                removedItem: null
            }
        case RESET_ADDED_ITEM:
            return {
                ...state,
                addedItem: null
            }
        default:
            return state;
    }
}

export default reducer;
