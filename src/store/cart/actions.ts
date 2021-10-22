import { ActionCreator } from "redux";
import { IProduct } from "../product/actions";


export const ADD_TO_CART = 'ADD_TO_CART';

export interface ICartProduct extends IProduct {
  amount: number;
  size: string;
}

export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  product: ICartProduct;
}

export const addToCart: ActionCreator<AddToCartAction> = (product: ICartProduct) => ({
  type: ADD_TO_CART,
  product
})