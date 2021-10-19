import { Reducer } from "react";
import { IProduct, SetProductAction, SET_PRODUCT } from "./actions";


export const productReducer: Reducer<IProduct, SetProductAction> = (state, action) => {
  switch(action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        img: action.inf.img,
        name: action.inf.name,
        desc: action.inf.desc,
        price: action.inf.price,
      }
  }
}