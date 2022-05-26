import { Product } from "../typescript/Product";

export interface ProductListState {
  products: Product[];
//   pages?: number;
//   page?: number;
  loading: boolean;
  error?: string;
}


export enum ProductListActionTypes {
  ALL_PRODUCTS_REQUEST = "ALL_PRODUCTS_REQUEST",
  ALL_PRODUCTS_SUCCESS = "ALL_PRODUCTS_SUCCESS",
  ALL_PRODUCTS_FAIL = "ALL_PRODUCTS_FAIL",
}

export interface FetchProductsRequestAction {
  type: ProductListActionTypes.ALL_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccessAction {
  type: ProductListActionTypes.ALL_PRODUCTS_SUCCESS;
  payload: Product[] ;

  // payload: { products: Product[] };
//   ; pages: number; page: number 
}

export interface FetchProductsFailureAction {
  type: ProductListActionTypes.ALL_PRODUCTS_FAIL;
  payload: any;
}

export type ProductListAction =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FetchProductsRequestAction;
