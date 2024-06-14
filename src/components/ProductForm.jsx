import { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleAddProduct = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    setProduct({ name: "", description: "", price: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleAddProduct}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleAddProduct}
        />
        <label htmlFor="price">price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleAddProduct}
        />
      </form>
    </>
  );
}

export default ProductForm;
