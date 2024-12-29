import { createContext, useContext, useReducer } from "react";
// import faker from "faker";
import { faker } from "@faker-js/faker";
import reducer from "./reducer";
import { AddToCart } from "./actions";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    fakeID: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 2, 4, 6, 8, 9]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
  }));
  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cart: [],
  });
  const handleAddcart = () => {
    dispatch({ type: AddToCart });
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);
