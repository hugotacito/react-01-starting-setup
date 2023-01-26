import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    description: "The first book I ever wrote.",
    price: 5,
  },
  {
    id: "p2",
    title: "My Second Book",
    description: "The second book I ever wrote.",
    price: 7,
  },
];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((product) => {
    return (
      <ProductItem
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        id={product.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
