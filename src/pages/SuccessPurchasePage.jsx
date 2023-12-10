/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './SuccessPurchasePage.css'; 
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const SucessPurchasePage = ({products}) => {

  const {setCart} = useContext(CartContext);

  const handleClearCart = () => {
    setCart([]);
  }

  const computeTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }

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
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <p className="success-purchase-total-price">Total: ${`${computeTotalPrice()}`}</p>
      <p className="success-purchase-separator">---------------------------------------------</p>
      <Link to={"/"} className="success-purchase-button" onClick={handleClearCart}>Volver a la tienda</Link>
    </div>
  );
};
