import React from "react";
import "./styles/style.css";
import { useSelector } from "react-redux";

function Item({ match }) {
  const items = useSelector((state) => state.items);
  let id = match.params.id;
  //   console.log(items.items.filter((item) => item.productName.includes(id)));

  let object;

  if (!items.isPending) {
    object = items.items.filter((item) => item.productName.includes(id))[0];
  }

  return (
    !items.isPending && (
      <div className="item">
        <img alt="" src={`https:${object.image[0].fields.file.url}`}></img>
        <div className="info">
          <h3>{object.productName.toUpperCase()}</h3>
          <div className="description">{object.description}</div>
          <div className="price">{`$${object.price}`}</div>
          <form className="sizes">
            {object.hasOwnProperty("sizes") &&
              object.sizes.map((size, i) => (
                <div className="size" key={i}>
                  <input type="radio" id={size} name="size" value={size} />
                  <label htmlFor={size}> {size}</label>
                </div>
              ))}
          </form>
          <button>ADD TO CART</button>
        </div>
      </div>
    )
  );
}

export default Item;
