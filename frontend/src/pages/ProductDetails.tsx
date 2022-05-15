// import products from '../testDB/data';
import {Link, useParams, useNavigate} from 'react-router-dom';
// import Rating from 'react-rating'

function ProductDetails():any {

    const products:any[] = []

    const params = useParams()
    const navigate = useNavigate()

    // const productId = match.params.id
    const {id} = params;
    const pro = products.find(product => Number(product.id) === Number(id))
    // const product = products.find((item) => Number(item.id) == Number(id));

    if (!pro) {
      return navigate("/shop");
    }


  return (
    <div>
      
        <Link to='/' className='btn btn-primary p-2 mt-3'> Go Back to the home</Link>
        <p>Product details with id is {id}</p>
        <hr />
       <div className="row">
         <div className="col-md-6">
          <img className='w-100' src={pro.imageUrl} alt="" />
         </div>
         <div className="col-md-6">
            <h1>{pro.name}</h1>
            <h4>${pro.price}</h4>
            <p>{pro.rating}</p>
            
            {/* <Rating 
              emptySymbol="fa fa-star-o fa-1x"
              fullSymbol="fa fa-start fa-1x"
            /> */}

         </div>
       </div>
    </div>
  )
}

export default ProductDetails
