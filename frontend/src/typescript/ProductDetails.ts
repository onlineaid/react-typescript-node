import { Product } from "../typescript/Product";

export interface ProductDetailsState {
  loading: boolean;
  product?: Product[];
  error?: string;
}

export enum ProductDetailsActionTypes {
  PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
  PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
  PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL",
}

export interface FetchProductRequestAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST;
}

export interface FetchProductSuccessAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS;
  payload: Product[];
}

export interface FetchProductFailureAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL;
  payload: any;
}

export type ProductDetailsAction =
  | FetchProductSuccessAction
  | FetchProductFailureAction
  | FetchProductRequestAction;
