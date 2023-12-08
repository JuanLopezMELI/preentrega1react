import {Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {

  const {cart} = useContext(CartContext);
  let itemQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart">
      <Badge badgeContent={itemQuantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
};

export default CartWidgetComponent;
