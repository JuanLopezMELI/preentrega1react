import {useState, useEffect} from 'react';
import { getAllCategories } from '../services/apiCategories';

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getAllCategories()
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          console.log("Error obteniendo las categorías ");
          console.log(err);
        })
    }, []);

    return {categories};
};