import { Model, Document } from "mongoose";

/**
 * Represents a product
 */

export interface Product extends Document  {
    name: string,
    sizes: number[],
    types: number[], 
    price: number,
    category: number,
    rating: number,
    imageUrl: string,
    reviews: Review[]
}

export interface Review extends Document  {
    user: string,
    name: string,
    rating: number,
    comment: string
}

/**
 * Represents a product w/ reviews
 */
 interface ProductInDatabase extends Product {
    user: string;
    reviews: Review[];
  }


export interface ProductDocument extends ProductInDatabase, Document {}

export interface ProductModel extends Model<ProductDocument> {}