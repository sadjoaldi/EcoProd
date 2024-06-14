import "../styles/Product.css";

function Product({ name, description, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description} </p>
      <span>{price} </span>
    </div>
  );
}

export default Product;
