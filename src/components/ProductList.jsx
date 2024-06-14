import { useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

function ProductList() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

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
      <ProductForm onAddProduct={handleAddProduct} />
    </>
  );
}

export default ProductList;
