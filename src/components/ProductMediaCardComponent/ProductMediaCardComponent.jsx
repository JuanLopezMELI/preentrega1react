/* eslint-disable react/prop-types */

import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductMediaCard = ({product}) => {
  const {cart, setCart} = useContext(CartContext);

  const addToCart = () => {
    let cartProduct = cart.find((item) => item.id === product.id);
    if (cartProduct) {
      cartProduct.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...{id: product.id, price: product.price, title: product.title, image: product.image}, quantity: 1 }]);
    }
  }

  return (
      <Card sx={{maxWidth: "30%", flexGrow: 1}}>
        <Link key={product.id} to={`/item/${product.id}`} style={{textDecoration:"none"}}>
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
        </Link>
        <CardActions>
          <Button size="small" color="primary" onClick={addToCart}>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card>
  );
};
