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
              <span style={{ padding: 10 }}>
                {cart?.map((item, i) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      key={i}
                    >
                      <p>{item.name}</p>
                      <p>{item.price}</p>

                      <p>{item.qty}</p>

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
                })}
              </span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
