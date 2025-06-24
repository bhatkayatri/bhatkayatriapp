import { createSelector } from "reselect";

const selectShop=state=>state.shop;//shop reducer

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections //collection from shop reducer
  );
  
  export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    //used to return whole shop data
  );
  
  export const selectCollection = collectionUrlParam =>//not memoized because based on params collection
  //object used for getting partcular collection
    createSelector(
      [selectCollections],
      collections => collections[collectionUrlParam]
    );