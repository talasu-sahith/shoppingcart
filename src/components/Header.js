import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { MdDelete } from "react-icons/md";

const Header = () => {
  const { cart, handleRemoveCart } = useGlobalContext();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            type="text"
            placeholder="Search a Product"
            style={{ width: 500 }}
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: "5px auto" }}>
                {cart.length > 0
                  ? cart.map((item, i) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginLeft: "20px",
                          }}
                          key={i}
                        >
                          <img
                            src={item.image}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          ></img>
                          <div
                            style={{
                              display: "flex",
                              flex: "1",
                              flexDirection: "column",
                              marginLeft: "10px",
                            }}
                          >
                            <span>{item.name}</span>
                            <span>₹ {item.price.split(".")[0]}</span>

                            {/* <span>{item.qty}</span> */}
                          </div>
                          <MdDelete
                            fontSize="25px"
                            style={{
                              marginRight: "10px",
                              cursor: "pointer",
                              zIndex: "10",
                            }}
                            onClick={() => handleRemoveCart(item.fakeID)}
                          />
                        </div>
                      );
                    })
                  : `Cart is Empty`}
                <Link to={"/cart"}>
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go to Cart
                  </Button>
                </Link>
              </span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
