import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import {BasicPage} from "../pages/BasicPage";
import {ItemDetailContainerComponent} from "../components/ItemDetailContainerComponent/ItemDetailContainerComponent";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainerComponent
              greeting={
                "¡Bienvenido a Kafe! Aprovecha nuestras promociones y convierte tu casa en un lugar soñado."
              }
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainerComponent
              greeting={
                "¡Bienvenido a Kafe! Aprovecha nuestras promociones y convierte tu casa en un lugar soñado."
              }
            />
          }
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainerComponent />}
        />
        <Route path="/about" element={<BasicPage title="About page" />} />
        <Route path="/contact" element={<BasicPage title="Contact page" />} />
        <Route path="/cart" element={<BasicPage title="Cart Widget Component will be here soon" />} />
        <Route path="/login" element={<BasicPage title="Login component will be here soon" />} />
        <Route path="/search" element={<BasicPage title="Search component will be here soon" />} />
      </Routes>
    </BrowserRouter>
  );
};
