import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";
import {useParams} from "react-router-dom";
import {useProductById} from "../../hooks/useProducts";
import {LoaderComponent} from "../LoaderComponent/LoaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

import "./ItemDetailContainer.css";

export const ItemDetailContainerComponent = () => {
  const {itemId} = useParams();

  const {product, isLoading, error} = useProductById(itemId);

  console.log(product);
  return isLoading ? (
    <LoaderComponent />
  ) : error ? (
    <ErrorComponent />
  ) : (
    <div className="item-detail-container">
      <Card sx={{maxWidth: "40%"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={product.image}
            alt={product.title}
            sx={{objectFit: "contain"}}
          />
          <CardContent sx={{height: "content-fit"}}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
