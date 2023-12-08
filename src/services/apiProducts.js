import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const getProductById = (id) => {
    const db = getFirestore();
    const singleProduct = doc(db, "products", id);
    return getDoc(singleProduct);
};

export const getProductsByCategory = (category) => {
    const db = getFirestore();
    const categoryQuery = query(
        collection(db, "products"),
        where("category", "==", category)
    )
    return getDocs(categoryQuery);
}

export const getAllProducts = () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    return getDocs(productsCollection);
}