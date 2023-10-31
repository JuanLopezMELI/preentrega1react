import "./App.css";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainerComponent greeting={"¡Bienvenido a Kafe! Aprovecha nuestras promociones y convierte tu casa en un lugar soñado."}/>
    </div>
  );
}

export default App;
