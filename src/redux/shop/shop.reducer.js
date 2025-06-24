import SHOP_DATA from "./shops.data";

const INITIAL_STATE={
    collections:SHOP_DATA
};

const shopReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
    default:
      return state ;//since we are using this reducer just to store data thus default state

}
}

export default shopReducer;