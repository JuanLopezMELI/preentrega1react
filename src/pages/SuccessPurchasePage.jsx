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
      <h1 className="success-purchase-title">¡Gracias por tu compra!</h1>
      <p className="success-purchase-description">
        Tu compra ha sido realizada con éxito. Te enviaremos un correo
        electrónico con los detalles de tu compra.
      </p>
      <p>¡Esperamos verte pronto!</p>
      <p>Equipo de Kafe</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <p>Detalle de tu compra:</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <div className="success-purchase-products-container">
        <p>Productos:</p>
        {purchaseDetails.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <p className="success-purchase-total-price">Total: ${`${computeTotalPrice(purchaseDetails)}`}</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <Link to={"/"} className="success-purchase-button">Volver a la tienda</Link>
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
