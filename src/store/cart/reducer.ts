import { Reducer } from "react";
import { IProduct } from "../product/actions";
import { AddToCartAction, ADD_TO_CART, ICartProduct } from "./actions";


export const cartReducer: Reducer<ICartProduct, AddToCartAction> = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        
        id: action.product.id,
        img: action.product.img,
        name: action.product.name,
        desc: action.product.desc,
        color: action.product.color,
        price: action.product.price,
        amount: action.product.amount,
        size: action.product.size,
      }
  }
}