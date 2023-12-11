import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import {BasicPage} from "../pages/BasicPage";
import {ItemDetailContainerComponent} from "../components/ItemDetailContainerComponent/ItemDetailContainerComponent";
import {CartContext} from "../context/CartContext";
import {useState} from "react";
import {CheckoutPage} from "../pages/CheckoutPage";
import {SucessPurchasePage} from "../pages/SuccessPurchasePage";
import {AboutPage} from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";

export const AppRouter = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cart, setCart}}>
        <NavBarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainerComponent
                greeting={
                  "¡Welcome to kafe! Take advantage of our promotions and turn your home into a dream place."
                }
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainerComponent
                greeting={
                  "¡Welcome to kafe! Take advantage of our promotions and turn your home into a dream place."
                }
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainerComponent />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CheckoutPage />} />
          <Route
            path="/login"
            element={<BasicPage title="Login component will be here soon" />}
          />
          <Route
            path="/search"
            element={<BasicPage title="Search component will be here soon" />}
          />
          <Route path="/purchase/successful" element={<SucessPurchasePage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};
