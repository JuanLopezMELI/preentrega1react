import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidgetComponent = () => {
    return (
        <Link to="/cart">
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon/>
          </Badge>
        </Link>
    );
}

export default CartWidgetComponent;
