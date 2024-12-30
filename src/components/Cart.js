import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useGlobalContext } from "../context/context";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import Total from "./utlis";

const Cart = () => {
  const { cart, handleRemoveCart, handleQty } = useGlobalContext();
  const { TotalAmount } = Total(cart);
  return (
    <div className="cartPage">
      <div style={{ width: "70%", display: "flex", justifyContent: "center" }}>
        <ListGroup style={{ width: "70%" }}>
          {cart.map((item) => {
            return (
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <img
                      src={item.image}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col md={2}>{item.name}</Col>
                  <Col md={2}>₹ {item.price.split(".")[0]}</Col>
                  <Col md={2}>
                    <Rating rating={item.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => handleQty(item.fakeID, e.target.value)}
                    >
                      {[...Array(item.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <MdDelete
                      fontSize="35px"
                      onClick={() => handleRemoveCart(item.fakeID)}
                    ></MdDelete>
                  </Col>
                </Row>{" "}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="filters">
        <span className="title"> Sub Total {`(${cart.length})`}</span>
        <span>
          <h4>Total : ₹ {TotalAmount}</h4>
        </span>
        <Button> Proceed to CheckOut</Button>
      </div>
    </div>
  );
};

export default Cart;
