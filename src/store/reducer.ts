import { Reducer } from "react";
import { AddToCartAction, ADD_TO_CART, CartAction, DEL_FROM_CART, ICartProduct, UPDATE_AMOUNT } from "./cart/actions";
import { IProduct, SetProductAction, SET_PRODUCT } from "./product/actions";
import { productReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";
import { SetLoggedAction, SET_LOGGED } from "./login/action";

export type RootState = {
  product: IProduct,
  cart: ICartProduct[],
  isLogged: Boolean,
}

const initialState: RootState = {
  product: {
    img: "",
    name: "",
    desc: "",
    price: "",
  },
  cart: [],
  isLogged: false
}

type MyAction = SetProductAction | CartAction | SetLoggedAction;

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
        color: "",
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

    case UPDATE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map(
          (item, i) => i === action.id ? {...item, amount: action.newAmount} : item
        )
      }

    case SET_LOGGED:
      return {
        ...state,
        isLogged: action.isLogged
      }

    default:
      return state;
  }
}