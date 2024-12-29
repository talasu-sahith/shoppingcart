const Product = ({ image, name, price }) => {
  return (
    <article className="prodArticle">
      <img src={image} alt={name}></img>
      <h4>{name}</h4>
      <p>
        Price : <span>${price}</span>
      </p>
      <button className="">Add to cart</button>
    </article>
  );
};

export default Product;
