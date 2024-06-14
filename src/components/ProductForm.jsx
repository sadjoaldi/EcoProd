/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "../styles/ProductForm.css";

function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const handlAddPro = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProduct({ name: "", description: "", price: "" });

    onAddProduct(product);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          ref={nameRef}
          name="name"
          value={product.name}
          onChange={handlAddPro}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          ref={descriptionRef}
          name="description"
          value={product.description}
          onChange={handlAddPro}
        />
        <label htmlFor="price">price</label>
        <input
          type="number"
          ref={priceRef}
          name="price"
          value={product.price}
          onChange={handlAddPro}
        />
        <button type="submit">Ajouter le produit</button>
      </form>
    </>
  );
}

export default ProductForm;

// const handleAddProduct = (e) => {
//     // console.log(e.target);

//     const newProduct = {
//       name: e.target.name.value,
//       description: e.target.description.value,
//       price: e.target.price.value,
//     };

//     setProduct(
//       //   ...product,
//       {
//         newProduct,
//         [e.target.name]: e.target.value,
//         [e.target.description]: e.target.value,
//         [e.target.price]: e.target.value,
//       }
//     );
//   };
