import { Product } from "../type/product";
import mongoose, { Schema } from "mongoose";

const reviewSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    sizes: {
      type: [],
    },
    types: {
      type: [],
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },

    reviews: [reviewSchema],

    // you can create like this way  =============
    // * but here ObjectId is not assaigenable

    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'User',
    //             required: true
    //         },
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         rating: {
    //             type: Number,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model<Product>("Products", productSchema);
