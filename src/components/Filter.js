import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useGlobalContext } from "../context/context";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
const Filter = () => {
  const { handleSortAsc, handleSortDesc, handleFast } = useGlobalContext();
  const [rate, setRate] = useState(3);
  return (
    <div className="filters">
      <span className="title"> FilterProducts </span>

      <span>
        <Form.Check // prettier-ignore
          type="radio"
          id="ascending"
          name="sort"
          label="Ascending"
          onClick={() => handleSortAsc()}
        />
      </span>
      <span>
        <Form.Check // prettier-ignore
          type="radio"
          name="sort"
          id="descending"
          label="Descending"
          onClick={() => handleSortDesc()}
        />
      </span>
      <span>
        <Form.Check
          type="checkbox"
          label="Fast Delivery"
          id="fastDelivery"
          // checked={fastDelivery}
          onClick={(e) => handleFast(e.target.checked)}
        />
      </span>
      <span>
        <Form.Check
          type="checkbox"
          label="include outof stock"
          id="outofstock"
        />
      </span>
      <span>
        <label style={{ marginRight: "10px" }}>Rating :</label>
        <Rating
          rating={rate}
          onclick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filter;
