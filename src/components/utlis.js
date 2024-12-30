const Total = (cart) => {
  let TotalAmount = 0;
  cart.map((x) => (TotalAmount += x.qty * x.price.split(".")[0]));
  return { TotalAmount };
};

export default Total;
