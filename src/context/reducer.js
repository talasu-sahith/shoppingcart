import { AddToCart, Ascending, Descending, FastDelivery } from "./actions";

const reducer = (state, action) => {
  if (action.type === Ascending) {
    let prod = state.products;
    prod.sort((a, b) => a.name.localeCompare(b.name));

    return { ...state, products: prod };
  }
  if (action.type === Descending) {
    let prod = state.products;
    prod.sort((a, b) => b.name.localeCompare(a.name));

    return { ...state, products: prod };
  }
  if (action.type === FastDelivery) {
    if (action.payload.val === true) {
      let prod = state.products;
      let fastprod = state.fastdeliveryproducts;
      return { ...state, products: fastprod, fastdeliveryproducts: prod };
    }

    let prod = state.products;
    let fastprod = state.fastdeliveryproducts;
    return { ...state, products: fastprod, fastdeliveryproducts: prod };
  }
  return state;
};
export default reducer;
