import * as actionType from "../ReduxConstants/CartConstants";
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
                const item = action.payload;
                // const exist = state.cartItems.find((product) => product.id === item.id);
                const exist = state.cartItems.find(product => product.id === item.id);

                if (exist) {
                    return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === exist.product ? item : x
                    ),
                    };
                }
                else {
                    return  {...state,cartItems:[...state.cartItems,item]}
                   
                }
    case actionType.REMOVE_FROM_CART:
        return{
            // ...state, cartItems: state.cartItems.filter(product=>product.id !== action.payload)
            ...state, cartItems: state.cartItems.filter(product=>product.id !== action.payload)
        }
    default:
        return state
  }
};
