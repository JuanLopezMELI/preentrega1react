/* eslint-disable react/prop-types */
import "../ItemListContainerComponent/ItemListContainerComponent.css";
import {useProducts} from "../../hooks/useProducts";
import {LoaderComponent} from "../LoaderComponent/LoaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import {ProductMediaCard} from "../ProductMediaCardComponent/ProductMediaCardComponent";
import {useParams} from "react-router-dom";

const ItemListContainerComponent = ({greeting}) => {
  const {categoryId} = useParams();
  const {products, isLoading, error} = useProducts(categoryId);
  
  return (
    <div className="hero-section-container">
      <p className="greeting">{greeting}</p>
      <div className="products-container">
        {isLoading ? (
          <LoaderComponent />
        ) : error ? (
          <ErrorComponent />
        ) : (
          products.map((product) => (
            <ProductMediaCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainerComponent;
