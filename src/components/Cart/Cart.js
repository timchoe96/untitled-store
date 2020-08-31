import React from "react";
import "./styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { cartStyles } from "../../actions/index.js";
import plus from "./images/plus.png";
import minus from "./images/minus.png";

function Cart() {
  const dispatch = useDispatch();
  const cartPosition = useSelector((state) => state.cart.position);
  const cartBackground = useSelector((state) => state.cart.background);
  const cartPointer = useSelector((state) => state.cart.pointer);
  const cart = useSelector((state) => state.itemList);
  const userCart = useSelector((state) => state.itemListUser);
  const user = useSelector((state) => state.activeUser);

  const cartClose = () => {
    dispatch(
      cartStyles({
        position: "-400px",
        background: "rgba(0,0,0,0)",
        pointer: "none",
      })
    );
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  };

  console.log(cart);
  return (
    <div
      className="dimmedBackground"
      style={{ background: cartBackground, pointerEvents: cartPointer }}
    >
      <main className="cart" style={{ right: cartPosition }}>
        <div onClick={cartClose} className="close">
          CLOSE
        </div>
        <h3>Shopping Cart</h3>
        {user
          ? userCart.map()
          : cart.map((item, i) => (
              <div key={i} className="cartItem">
                <div className="topCartItem">
                  <img alt="" src={`https:${item.image}`}></img>
                  <div className="infoRight">
                    <li>{item.name}</li>
                    <li>{item.size}</li>

                    <div className="price">{`$${item.price}`}</div>
                    <div className="itemAmount">
                      <img src={minus} alt=""></img>

                      <div className="amount">
                        {user
                          ? userCart.filter((cart) => cart.name === item.name)
                              .lenth
                          : cart.filter((cart) => cart.name === item.name)
                              .length}
                      </div>
                      <img alt="" src={plus}></img>
                    </div>
                  </div>
                </div>
                <button>REMOVE ITEM</button>
              </div>
            ))}
      </main>
    </div>
  );
}

export default Cart;
