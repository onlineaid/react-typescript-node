import { Router, Request, Response } from "express";
const Product = require("../models/productModel");

const router = Router();

router.get("/products", async (req: Request, res: Response) => {
  
  try {
    const product = await Product.find();

     res.send(product);
    // const pageSize = 8
    // const page = Number(req.query.pageNumber) || 1
    // const keyword = req.query.keyword
    // ? {
    //     $or: [
    //       {
    //         name: {
    //           $regex: req.query.keyword,
    //           $options: "i",
    //         },
    //       },
    //       {
    //         brand: {
    //           $regex: req.query.keyword,
    //           $options: "i",
    //         },
    //       },
    //     ],
    //   }
    // : {};
  
  
    // const count = await Product.countDocuments({ ...keyword })
    // const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page-1))
    // res.json( {products, page, pages: Math.ceil(count / pageSize) })

  } catch (err) {
    return res.status(500).json({ msg: "Somthing wrong" + err });
  }
  

  // Product.find({},  (err:any, docs:any) => {
  //     if(!err) {
  //         return res.json({data: docs})
  //     }else {
  //         return res.status(400).json({msg: 'Somthing wrong'})
  //     }
  // })
});

// router.get("/products/search", async (req: Request, res: Response) => {
//   const pageSize = 8
//   const page = Number(req.query.pageNumber) || 1
//   const keyword = req.query.keyword
//   ? {
//       $or: [
//         {
//           name: {
//             $regex: req.query.keyword,
//             $options: "i",
//           },
//         },
//         {
//           brand: {
//             $regex: req.query.keyword,
//             $options: "i",
//           },
//         },
//       ],
//     }
//   : {};


//   const count = await Product.countDocuments({ ...keyword })
//   const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page-1))
//   res.json( {products, page, pages: Math.ceil(count / pageSize) })

// })

router.get("/product/:id", async (req: Request, res: Response) => {

  const product = await Product.findById(req.params.id);

  if (!product) {
      return 'Product not found!'
  }

  res.status(200).json({
      success: true,
      product
  })


});

module.exports = router;
