import React from "react";
import Form from "react-bootstrap/Form";
import { useGlobalContext } from "../context/context";
const Filter = () => {
  const { handleSortAsc, handleSortDesc, handleFast } = useGlobalContext();
  return (
    <div className="filters">
      <span className="title"> Filter</span>
      <span>
        <Form>
          <Form.Check // prettier-ignore
            type="radio"
            id="ascending"
            name="sort"
            label="Ascending"
            onClick={() => handleSortAsc()}
          />
          <Form.Check // prettier-ignore
            type="radio"
            name="sort"
            id="descending"
            label="Descending"
            onClick={() => handleSortDesc()}
          />
        </Form>
        <span>
          <Form.Check
            type="checkbox"
            label="Fast Delivery"
            id="fastDelivery"
            // checked={fastDelivery}
            onClick={(e) => handleFast(e.target.checked)}
          />
        </span>
      </span>
    </div>
  );
};

export default Filter;
