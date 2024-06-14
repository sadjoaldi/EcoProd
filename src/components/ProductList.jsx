import { useEffect, useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

function ProductList() {
  const [products, setProducts] = useState([]);

  // la fonction qui permet l'ajout de produit à la liste
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // useEffect pour recuperer les produits stockés dans le local storage lors du chargment de la page

  // avoir problème de rendu
  useEffect(() => {
    const proSaveList = localStorage.getItem("products");
    if (proSaveList) {
      setProducts(JSON.parse(proSaveList));
    }
  }, []);

  //ce useEffect permet de stocker les produits dans le local storage lorsqu'on ajoute un nouveau produit
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

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
