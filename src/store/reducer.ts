import { Reducer } from "react";
import { AddToCartAction, ADD_TO_CART, CartAction, DEL_FROM_CART, ICartProduct } from "./cart/actions";
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

type MyAction = SetProductAction | CartAction;

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
      cart: state.cart.concat(cartReducer({
        img: "",
        name: "",
        desc: "",
        price: "",
        amount: 0,
        size: "",
        id: -1
      }, action)) 
    }

    case DEL_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.id),
          ...state.cart.slice(action.id + 1)
        ]
      }

    default:
      return state;
  }
}