/* eslint-disable react/prop-types */

import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProductMediaCard = ({product}) => {
  return (
      <Card sx={{maxWidth: "30%", flexGrow: 1}}>
        <Link key={product.id} to={`/item/${product.id}`}>
        <CardMedia
          component="img"
          alt={product.title}
          height="40%"
          src={product.image}
          sx={{objectFit: "contain"}}
        />
        <CardContent sx={{height: "content-fit"}}>
          <Typography gutterBottom variant="h7" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
        </CardActions>
        </Link>
      </Card>
  );
};
