import {cardio} from "ldrs";
import "./Loader.css";

export const LoaderComponent = () => {
  cardio.register();
  return (
    <div className="loader-container">
      <l-cardio size="100" stroke="4" speed="2" color="black"></l-cardio>
    </div>
  );
};
