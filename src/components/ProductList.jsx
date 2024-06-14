import Product from "./Product";

// const products = [
//   {
//     name: "samsung",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus pariatur laboriosam sed, mollitia corporis rem necessitatibus alias repudiandae voluptatibus deserunt assumenda incidunt saepe aut illo odit veritatis voluptate soluta itaque?",
//     price: 1000,
//   },
//   {
//     name: "iphone",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus pariatur laboriosam sed, mollitia corporis rem necessitatibus alias repudiandae voluptatibus deserunt assumenda incidunt saepe aut illo odit veritatis voluptate soluta itaque?",
//     price: 1200,
//   },
//   {
//     name: "huawei",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus pariatur laboriosam sed, mollitia corporis rem necessitatibus alias repudiandae voluptatibus deserunt assumenda incidunt saepe aut illo odit veritatis voluptate soluta itaque?",
//     price: 800,
//   },
// ];

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
    </>
  );
}

export default ProductList;
