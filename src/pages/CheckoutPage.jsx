import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import "./CheckoutPage.css";
import {Link} from "react-router-dom";

export const CheckoutPage = () => {
  const {cart, setCart} = useContext(CartContext);

  const computeTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleRemoveCheckoutItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-info">
        <h1 className="checkout-title">Resumen de tu compra</h1>
        <div className="checkout-products-container">
          {cart.map((item) => (
            <div key={item.id} className="product-card">
              <img
                className="product-image"
                src={item.image}
                alt={item.title}
              />
              <div className="product-info">
                <p className="product-title">{item.title}</p>
                <p>
                  Precio unitario:{" "}
                  <span className="item-price">{item.price}</span>
                </p>
                <p>
                  Cantidad seleccionada:{" "}
                  <span className="item-quantity">{item.quantity}</span>
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleRemoveCheckoutItem(item.id);
                  }}
                  className="remove-button"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">{`Total a pagar: $${computeTotalPrice()}`}</div>
        <div className="button-container">
          <button className="clear-cart" onClick={clearCart}>
            Limpiar carrito
          </button>
          <Link to="/purchase/successful" className="purchase-button">
            Pagar
          </Link>
        </div>
      </div>
    </div>
  );
};
