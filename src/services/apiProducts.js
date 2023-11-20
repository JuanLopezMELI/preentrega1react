import axios from 'axios';

export const getAllProducts = () => {
    return axios.get('https://fakestoreapi.com/products');
};

export const getProductById = (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
};

export const getProductsByCategory = (category) => {
    return axios.get(`https://fakestoreapi.com/products/category/${category}`);
}