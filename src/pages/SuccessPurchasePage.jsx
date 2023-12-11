/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import './SuccessPurchasePage.css'; 
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const SucessPurchasePage = () => {

  const {cart, setCart} = useContext(CartContext);
  const [purchaseDetails, setPurchaseDetails] = useState([]);

  useEffect(() => {
    setPurchaseDetails(cart);
    setCart([]);
  }, []);

  return (
    <div className="success-purchase-container">
      <h1 className="success-purchase-title">¡Thanks for your purchase!</h1>
      <p className="success-purchase-description">
        Your purchase has been successfully completed. We will send you an email
        with the details of your purchase.
      </p>
      <p>¡We hope to see you again!</p>
      <p>Kafe team</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <p>Purchase details:</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <div className="success-purchase-products-container">
        <p>Products:</p>
        {purchaseDetails.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <p className="success-purchase-total-price">Total: ${`${computeTotalPrice(purchaseDetails)}`}</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <Link to={"/"} className="success-purchase-button">Go to the store</Link>
    </div>
  );
};

const computeTotalPrice = (purchaseDetails) => {
  let totalPrice = 0;
  purchaseDetails.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
}
