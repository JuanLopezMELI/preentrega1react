import {useEffect, useState} from "react";
import {getAllProducts, getProductById, getProductsByCategory} from "../services/apiProducts";

export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      getAllProducts()
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  
    return {products, isLoading, error};
};

export const useProductById = (id) => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      getProductById(id)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [id]);
  
    return {product, isLoading, error};
};

export const useProductByCategory = (category) => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      getProductsByCategory(category)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [category]);
  
    return {product, isLoading, error};
};