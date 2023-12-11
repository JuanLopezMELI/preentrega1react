import {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import "./CheckoutPage.css";
import {Link} from "react-router-dom";

export const CheckoutPage = () => {
  const {cart, setCart} = useContext(CartContext);
  const [inputQuantity, setInputQuantity] = useState(1);

  const computeTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveCheckoutItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addQuantity = (id, quantity) => {
    let cartProduct = cart.find((item) => item.id === id);
    cartProduct.quantity = cartProduct.quantity + quantity;
    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-info">
        <h1 className="checkout-title">Purchase invoice</h1>
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
                  Unit price:{" "}
                  <span className="item-price">{item.price}</span>
                </p>
                <p>
                  Selected Quantity:{" "}
                  <span className="item-quantity">{item.quantity}</span>
                </p>
              </div>
              <div>
                <input
                  type="number"
                  name="quantity-input"
                  id="quantity-input"
                  min={1}
                  onChange={(e) => {
                    if (e.target.value < 1) {
                      setInputQuantity(0);
                    } else {
                      setInputQuantity(Number(e.target.value))
                    }
                  }}
                />
                <button
                  onClick={() => {
                    addQuantity(item.id, inputQuantity);
                    if (inputQuantity < 1) {
                      setInputQuantity(0);
                    } else {
                      setInputQuantity(1);
                    }
                  }}
                  className="add-more-button"
                >
                  Add more
                </button>
                <button
                  onClick={() => {
                    handleRemoveCheckoutItem(item.id);
                  }}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">{`Total price: $${computeTotalPrice()}`}</div>
        <div className="button-container">
          <button className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
          <Link to="/purchase/successful" className="purchase-button">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};
