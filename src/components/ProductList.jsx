import { useEffect, useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

function ProductList() {
  const [products, setProducts] = useState([]);

  // la fonction qui permet l'ajout de produit à la liste
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);

    // le localstorage permet de stocker les produits
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };

  // useEffect pour recuperer les produits stockés dans le local storage lors du chargment de la page

  useEffect(() => {
    const proSaveList = localStorage.getItem("products");
    if (proSaveList) setProducts(JSON.parse(proSaveList));
  }, []);

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
