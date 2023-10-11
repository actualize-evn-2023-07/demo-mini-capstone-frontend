/* eslint-disable react/prop-types */
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>All products</h1>
      <div>
        Search by title:{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      <div className="cards">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="card">
              <img src={product.images[0].url} alt="" />
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <a href={`/products/${product.id}`}>More info</a>
            </div>
          ))}
      </div>
    </div>
  );
}
