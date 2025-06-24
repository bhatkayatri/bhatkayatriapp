import { createSelector } from 'reselect';//use this library

const selectUser = state => state.user;//only cart related  state from universal state and is called input selector


export const selectCurrentUser= createSelector(
  [selectUser],//input selector used here
  user=> user.currentUser//returned value from memoized version
);