import { createSelector } from 'reselect';//use this library

const selectCart = state => state.cart;//only cart related  state from universal state and is called input selector


export const selectCartItems = createSelector(
  [selectCart],//input selector used here
  cart => cart.cartItems//returned value from memoized version
);

export const selectCartHidden=createSelector(
  [selectCart],
  cart=>cart.hidden
)
export const selectCartItemsCount = createSelector(
  [selectCartItems],//input selector here is memoized selectCartItems it is used becuase selectcartItems  returns cartItems
  cartItems =>//returned value
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);