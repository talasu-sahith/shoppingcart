import { useState } from "react";
import { useGlobalContext } from "../context/context";

const Product = ({ image, name, price, fakeID }) => {
  const [incart, setIncart] = useState(false);
  const { handleAddcart } = useGlobalContext();
  return (
    <article className="prodArticle">
      <img src={image} alt={name}></img>
      <h4>{name}</h4>
      <p>
        Price : <span>${price}</span>
      </p>
      <button
        className={incart ? `btn-cart btn` : `btn`}
        onClick={() => {
          setIncart(!incart);
          handleAddcart(fakeID, incart);
        }}
      >
        {incart ? `Moved to cart` : `Add to cart`}
      </button>
    </article>
  );
};

export default Product;
