import { Document } from 'mongoose'

export interface Product extends Document  {
    name: string,
    sizes: number[],
    types: number[], 
    price: number,
    category: number,
    rating: number,
    imageUrl: string,
    reviews: string[]
}

export interface Review extends Document  {
    userId: string,
    name: string,
    rating: number,
    comment: string
}

// interface ProductInDatabase extends Product{
//     user: string,
//     reviews: Review[]
// }

// export interface ProductDocument extends ProductInDatabase , Document {}

// export interface ProductModel extends Model <ProductDocument> {}
