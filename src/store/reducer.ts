import { Reducer } from "react";
import { AddToCartAction, ADD_TO_CART, ICartProduct } from "./cart/actions";
import { IProduct, SetProductAction, SET_PRODUCT } from "./product/actions";
import { productReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";

export type RootState = {
  product: IProduct,
  cart: ICartProduct[]
}

const initialState: RootState = {
  product: {
    img: "",
    name: "",
    desc: "",
    price: "",
  },
  cart: [],
}

type MyAction = SetProductAction | AddToCartAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: productReducer(state.product, action)
      }

    case ADD_TO_CART: 
    return {
      ...state,
      cart: state.cart.concat(cartReducer(state.cart, action)) 
    }

    default:
      return state;
  }
}