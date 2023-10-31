import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidgetComponent = () => {
    return (
        <a href="">
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon/>
          </Badge>
        </a>
    );
}

export default CartWidgetComponent;
