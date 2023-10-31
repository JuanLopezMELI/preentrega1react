/* eslint-disable react/prop-types */
import "../ItemListContainerComponent/ItemListConatinerComponent.css"

const ItemListContainerComponent = ({greeting}) => {
  return (
    <div className="greeting-container">
        <p className="greeting">
            {greeting}
        </p>
    </div>
  );
};

export default ItemListContainerComponent;
