import { Reducer } from "react";
import { SetProductAction, SET_PRODUCT } from "./product/actions";
import { productReducer } from "./product/reducer";

export type RootState = {
  product: {
    img: string;
    name: string;
    desc: string;
    price: string;
  }
}

const initialState: RootState = {
  product: {
    img: "",
    name: "",
    desc: "",
    price: "",
  }
}

type MyAction = SetProductAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: productReducer(state.product, action)
      }


    default:
      return state;
  }
}