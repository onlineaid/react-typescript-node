import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Rating from 'react-rating';

import { Link } from "react-router-dom";

function Product({ product }: any) {
  return (
    <div className="col-md-4 mb-5 mt-3">
      <Card sx={{ maxWidth: 345 }} className="text-center">
        <Link to={`product/${product._id}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={product.imageUrl}
          />
        </Link>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name.substring(0, 15)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          {/* <Rating 
              emptySymbol="fa fa-star-o fa-1x"
              fullSymbol="fa fa-start fa-1x"
            /> */}
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Product;
