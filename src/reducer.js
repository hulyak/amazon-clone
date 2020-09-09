export const initialState = {
  basket: [],
  user : null
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// const totalPrice = basket.reduce((prev, current) => prev + Number(current.price), 0);

// dispatch products into data layer and pull into basket
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
   
    case "REMOVE_FROM_BASKET":
      // return {...state, basket: state.filter.filter(item => item.id !== action.id)}
      // find the first match and return
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket]; // copy the basket
      if (index >= 0) {
        newBasket.splice(index, 1);

      }
      else {
        console.warn(`Cant remove product {id : ${ action.id } as its not in basket}`);
      }

      return {...state, basket: newBasket};
    
    default:
      return state;
  }
};

export default reducer;
