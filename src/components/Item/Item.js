import React, { useState } from "react";
import "./styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { setItem } from "../../actions/index.js";
import { db } from "../../firebase.js";
import firebase from "firebase";

function Item({ match }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const user = useSelector((state) => state.activeUser);
  // console.log(user);

  let id = match.params.id;
  const [click, setClick] = useState("Choose a size");

  let object;

  if (!items.isPending) {
    object = items.items.filter((item) => item.productName.includes(id))[0];
  }

  const sizeClick = () => {
    setClick("Add to cart");
  };

  const addCartListLocal = () => {
    let nl = document.querySelectorAll("input");
    let chosenSize = Array.prototype.slice
      .call(nl)
      .filter((input) => input.checked);
    let returnedSize = object.hasOwnProperty("sizes")
      ? chosenSize[0].value
      : "One size";

    dispatch(
      setItem({
        name: object.productName,
        price: object.price,
        size: returnedSize,
        image: object.image[0].fields.file.url,
      })
    );
  };

  const addCartListDatabase = () => {
    let nl = document.querySelectorAll("input");
    let chosenSize = Array.prototype.slice
      .call(nl)
      .filter((input) => input.checked);
    let returnedSize = object.hasOwnProperty("sizes")
      ? chosenSize[0].value
      : "One size";

    db.collection(`${user.email}`).add({
      name: object.productName,
      price: object.price,
      size: returnedSize,
      image: object.image[0].fields.file.url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const buttonClick = () => {
    document.getElementById("addToCart").innerHTML === "Add to cart" && user
      ? addCartListDatabase()
      : addCartListLocal();
  };

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
                  <input
                    onClick={() => sizeClick()}
                    type="radio"
                    id={size}
                    name="size"
                    value={size}
                  />
                  <label htmlFor={size}> {size}</label>
                </div>
              ))}
          </form>
          <button
            type="button"
            onClick={() =>
              document.getElementById("addToCart").innerHTML ===
                "Add to cart" && buttonClick()
            }
            id="addToCart"
          >
            {object.hasOwnProperty("sizes") ? click : "Add to cart"}
          </button>
        </div>
      </div>
    )
  );
}

export default Item;
