import {useEffect, useState} from "react";
import {getAllProducts, getProductById, getProductsByCategory} from "../services/apiProducts";

export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      getAllProducts().then((querySnapshot) => {
        setProducts(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
      }).catch((err) => {
        setError(true);
        console.log(err);
      }).finally(() => {
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
      getProductById(id).then((querySnapshot) => {
        setProduct({id: querySnapshot.id, ...querySnapshot.data()});
      }).catch((err) => {
        setError(true);
        console.log(err);
      }).finally(() => {
        setIsLoading(false);
      });
    }, [id]);
  
    return {product, isLoading, error};
};

export const useProductByCategory = (category) => {
    const [categoryProducts, setCategoryProducts] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      getProductsByCategory().
      then((querySnapshot) => {
        setCategoryProducts(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
      }).catch((err) => {
        setError(true);
        console.log(err);
      }).finally(() => {
        setIsLoading(false);
      });
    }, [category]);
  
    return {categoryProducts, isLoading, error};
};

export const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(categoryId) {
      getProductsByCategory(categoryId)
      .then((querySnapshot) => {
        setProducts(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
      }).catch((err) => {
        setError(true);
        console.log(err);
      }).finally(() => {
        setIsLoading(false);
      });
    } else {
      getAllProducts()
      .then((querySnapshot) => {
        setProducts(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
      }).catch((err) => {
        setError(true);
        console.log(err);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [categoryId]);

  return { products, isLoading, error };
};