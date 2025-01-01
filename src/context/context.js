import { createContext, useContext, useEffect, useReducer } from "react";
// import faker from "faker";
import { faker } from "@faker-js/faker";
import reducer from "./reducer";
import {
  AddToCart,
  Ascending,
  Descending,
  FastDelivery,
  RemoveCart,
  ChangeQty,
} from "./actions";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  faker.seed(99);
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
    cart: [],
    fastdeliveryproducts: products.filter((item) => item.fastDelivery === true),
    allProducts: products,
    currentPageNumber: 1,
    postsPerPage: 3,
    products: [],
  });
  console.log(products);
  const handleAddcart = (prod) => {
    dispatch({ type: AddToCart, payload: prod });
  };
  const handleSortAsc = () => {
    dispatch({ type: Ascending });
  };
  const handleSortDesc = () => {
    dispatch({ type: Descending });
  };
  const handleFast = (val) => {
    dispatch({ type: FastDelivery, payload: { val } });
  };
  const handleRemoveCart = (id) => {
    dispatch({ type: RemoveCart, payload: { id } });
  };
  const handleQty = (id, qty) => {
    dispatch({ type: ChangeQty, payload: { id, qty } });
  };
  useEffect(() => {
    dispatch({ type: "initialization" });
    // state.products = products.slice(
    //   state.currentPageNumber * state.postsPerPage - state.postsPerPage,
    //   state.currentPageNumber * state.postsPerPage
    // );
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleAddcart,
        handleSortAsc,
        handleSortDesc,
        handleFast,
        handleRemoveCart,
        handleQty,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);
