import React from "react";
import Form from "react-bootstrap/Form";
const Filter = () => {
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
            onClick={(e) => console.log(e.target.id)}
          />
          <Form.Check // prettier-ignore
            type="radio"
            name="sort"
            id="descending"
            label="Descending"
            onClick={(e) => console.log(e.target.id)}
          />
        </Form>
      </span>
    </div>
  );
};

export default Filter;
