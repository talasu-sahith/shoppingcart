import { useGlobalContext } from "../context/context";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    <main>
      <div className="homePage">
        <Filter />
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
