import { useState } from "react";
import { useGlobalContext } from "../context/context";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { RemoveCart } from "../context/actions";

const Product = (prod) => {
  const { image, name, price, fakeID, fastDelivery, ratings, inStock } = prod;
  const [incart, setIncart] = useState(false);
  const { handleAddcart, handleRemoveCart, cart } = useGlobalContext();
  return (
    <div className="prodArticle">
      <Card>
        <Card.Img src={image} alt={name} variant="top"></Card.Img>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: "10", marginBottom: "10px" }}>
            ${price.split(".")[0]}
            {fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating
              rating={ratings}
              style={{ cursor: "pointer", zIndex: " -1" }}
            />
          </Card.Subtitle>
          {/* {inStock != 0 ? (
            <Button
              className={incart ? `btn-cart btn` : `btn`}
              onClick={() => {
                setIncart(!incart);
                handleAddcart(fakeID, incart);
              }}
            >
              {incart ? `Remove from cart` : `Add to cart`}
            </Button>
          ) : (
            <Button disabled className="btn">
              Out of Stock
            </Button>
          )} */}
          {cart.some((p) => p.fakeID === fakeID) ? (
            <Button variant="danger" onClick={() => handleRemoveCart(fakeID)}>
              Remove from Cart
            </Button>
          ) : (
            <Button disabled={!inStock} onClick={() => handleAddcart(prod)}>
              {inStock ? `Add to cart` : `Out of Stock`}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
