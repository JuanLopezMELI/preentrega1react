import {cardio} from "ldrs";

export const LoaderComponent = () => {
  cardio.register();
  return <l-cardio size="100" stroke="4" speed="2" color="black"></l-cardio>;
};
