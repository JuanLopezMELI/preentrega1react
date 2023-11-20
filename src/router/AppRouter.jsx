import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";

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
          element={
            <ItemListContainerComponent
              greeting={
                "¡Bienvenido a Kafe! Aprovecha nuestras promociones y convierte tu casa en un lugar soñado."
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
