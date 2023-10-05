/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      <div className="cards">
        {props.products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.images[0].url} alt="" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <button>Show more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
