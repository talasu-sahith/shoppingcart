import React from "react";
import { useGlobalContext } from "../context/context";

const Pagination = () => {
  const { products, allProducts, postsPerPage, dispatch, currentPageNumber } =
    useGlobalContext();
  const pages = [...Array(Math.ceil(allProducts.length / postsPerPage))].map(
    (_, index) => index + 1
  );
  return (
    <div
      style={{
        marginBottom: "2rem",
        marginLeft: "1rem",
        display: "flex",
        justifyContent: "space-around",
        width: "50%",
      }}
    >
      {pages.map((item) => (
        <button
          style={{
            backgroundColor:
              currentPageNumber === item ? "lightgreen" : "transparent",
            borderRadius: "20px",
          }}
          key={item}
          onClick={() =>
            dispatch({ type: "selectPagenumber", payload: { item } })
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
