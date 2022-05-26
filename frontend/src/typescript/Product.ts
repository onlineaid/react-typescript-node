export interface Product {
    _id: string;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    countInStock: number[];
    reviews: Array<Review>
}

export interface Review {
    _id: string;
    user: string;
    name: string;
    rating: number;
    comment: string;
    createdAt: string;
  }