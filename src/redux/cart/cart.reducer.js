import { CartTypes } from "./cart.types";
import { addItem, removeItem } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_FLAG:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartTypes.HIDE_CART:  // ✅ New case
      return {
        ...state,
        hidden: true
      };

    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payLoad)
      };

    case CartTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payLoad.id)
      };

    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payLoad)
      };

    default:
      return state;
  }
};

export default cartReducer;
