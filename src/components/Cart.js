import { ListGroup } from "react-bootstrap";
import { useGlobalContext } from "../context/context";

const Cart = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  return (
    <div className="homePage">
      <ListGroup>
        {cart.map((item) => {
          <h4>{item.name}</h4>;
        })}
      </ListGroup>
      {/* <div className="filters">
        <span className="title"> Sub Total</span>
      </div> */}
    </div>
  );
};

export default Cart;
