/* eslint-disable react/prop-types */
import "../styles/Product.css";

function Product({ name, description, price }) {
  return (
    <section className="products">
      <div className="prod">
        <h1>{name}</h1>
        <p>{description} </p>
        <span>{price} </span>
      </div>
    </section>
  );
}

export default Product;
