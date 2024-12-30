import {
  AddToCart,
  Ascending,
  Descending,
  FastDelivery,
  RemoveCart,
} from "./actions";

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
  // if (action.type === AddToCart) {
  //   // const prod = new Map(state.products.map((item) => [item.id, item]));
  //   if (action.payload.incart === false) {
  //     const cartprod = state.cart;
  //     const prodId = action.payload.id;
  //     console.log(prodId);
  //     const prod = state.products.find((item) => item.fakeID === prodId);
  //     cartprod.push({ ...prod, qty: action.payload.qty });
  //     console.log(cartprod);
  //     return { ...state, cart: cartprod };
  //   } else {
  //     const cartprod = state.cart;
  //     const newcart = cartprod.filter(
  //       (item) => item.fakeID != action.payload.id
  //     );

  //     console.log(newcart);
  //     return { ...state, cart: newcart };
  //   }
  //   // return state;
  // }
  // if (action.type === RemoveCart) {
  //   const prodcart = state.cart;
  //   const newCart = prodcart.filter((item) => item.fakeID != action.payload.id);
  //   console.log(newCart);
  //   return { ...state, cart: newCart };
  // }
  if (action.type === AddToCart) {
    return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
  }
  if (action.type === RemoveCart) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.fakeID != action.payload.id),
    };
  }
  throw new Error(`no Matching "${action.type}" - action Type`);
};
export default reducer;
