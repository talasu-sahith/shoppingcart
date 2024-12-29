import { useGlobalContext } from "../context/context";
import Product from "./Product";

const Home = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    <main>
      <div className="homePage">
        <div className="filters">
          <button>Filter by fast delivery</button>
        </div>
        <div className="articles">
          {products.map((item) => {
            return <Product {...item} key={item.fakeID} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
