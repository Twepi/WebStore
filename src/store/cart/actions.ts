import { ActionCreator } from "redux";
import { IProduct } from "../product/actions";

export interface ICartProduct extends IProduct {
  amount: number;
  size: string;
  id: number;
}

export const ADD_TO_CART = 'ADD_TO_CART';

export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  product: ICartProduct;
}

export const addToCart: ActionCreator<AddToCartAction> = (product: ICartProduct) => ({
  type: ADD_TO_CART,
  product
})

export const DEL_FROM_CART = 'DEL_FROM_CART'

export type DelFromCartAction = {
  type: typeof DEL_FROM_CART;
  id: number;
}

export const delFromCart: ActionCreator<DelFromCartAction> = (id: number) => ({
  type: DEL_FROM_CART,
  id
})

export type CartAction = AddToCartAction | DelFromCartAction;