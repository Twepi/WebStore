import { ActionCreator } from "redux";
import { IProduct } from "../product/actions";

export interface ICartProduct extends IProduct {
  amount: number;
  size: string;
  color: string;
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

export const UPDATE_AMOUNT = 'UPDATE_AMOUNT'

export type UpdateAmount = {
  type: typeof UPDATE_AMOUNT;
  id: number;
  newAmount: number;
}

export const updateAmount: ActionCreator<UpdateAmount> = (id: number, newAmount: number) => ({
  type: UPDATE_AMOUNT,
  id,
  newAmount
})

export type CartAction = AddToCartAction | DelFromCartAction | UpdateAmount;