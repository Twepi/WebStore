import { ActionCreator } from "redux"

export interface IProduct {
  img: string;
  name: string;
  desc: string;
  price: string;
}

export const SET_PRODUCT = 'SET_PRODUCT';

export type SetProductAction = {
  type: typeof SET_PRODUCT;
  inf: IProduct;
}

export const setProduct: ActionCreator<SetProductAction> = (inf: IProduct) => ({
  type: SET_PRODUCT,
  inf
})