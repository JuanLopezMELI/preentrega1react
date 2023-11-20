/* eslint-disable react/prop-types */
import "../ItemListContainerComponent/ItemListContainerComponent.css";
import {useAllProducts} from "../../hooks/useProducts";
import {LoaderComponent} from "../LoaderComponent/LoaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import {ProductMediaCard} from "../ProductMediaCardComponent/ProductMediaCardComponent";
import {useParams} from "react-router-dom";

const ItemListContainerComponent = ({greeting}) => {
  const {products, isLoading, error} = useAllProducts();
  const {categoryId} = useParams();

  let filteredProducts = products;

  if (categoryId) {
    filteredProducts = products.filter(
      (product) => product.category === categoryId
    );
  }

  return (
    <div className="hero-section-container">
      <p className="greeting">{greeting}</p>
      <div className="products-container">
        {isLoading ? (
          <LoaderComponent />
        ) : error ? (
          <ErrorComponent />
        ) : (
          filteredProducts.map((product) => (
            <ProductMediaCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainerComponent;
