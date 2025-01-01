import { useGlobalContext } from "../context/context";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Product from "./Product";

const Home = () => {
  const { products, postsPerPage, currentPageNumber } = useGlobalContext();
  //   console.log(products);
  return (
    <main>
      <div className="homePage">
        <Filter />
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="articles">
            {products.map((item) => {
              return <Product {...item} key={item.fakeID} />;
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </main>
  );
};

export default Home;
