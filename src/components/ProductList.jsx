import Product from "./Product";
import ProductForm from "./ProductForm";

function ProductList({ products }) {
  return (
    <>
      {" "}
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
      <ProductForm />
    </>
  );
}

export default ProductList;
