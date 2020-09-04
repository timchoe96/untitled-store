import React, { useEffect } from "react";
import "./styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { cartStyles } from "../../actions/index.js";
// import plus from "./images/plus.png";
// import minus from "./images/minus.png";
import { db } from "../../firebase.js";
import { deleteItem } from "../../actions/index.js";
import { cartTotal } from "../../actions/index.js";
import { cartTotalData } from "../../actions/index.js";

function Cart() {
  const dispatch = useDispatch();
  const cartPosition = useSelector((state) => state.cart.position);
  const cartBackground = useSelector((state) => state.cart.background);
  const cartPointer = useSelector((state) => state.cart.pointer);
  const cart = useSelector((state) => state.itemList);
  const userCart = useSelector((state) => state.itemListUser);
  const user = useSelector((state) => state.activeUser);
  const total = useSelector((state) => state.setTotal);
  const dataTotal = useSelector((state) => state.setTotalData);

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

  useEffect(() => {
    user
      ? dispatch(
          cartTotalData(userCart.reduce((acc, val) => acc + val.item.price, 0))
        )
      : dispatch(cartTotal(cart.reduce((acc, val) => acc + val.price, 0)));
  }, [cart, dispatch, user, userCart]);

  const itemDelete = (i) => {
    let newArray = cart;
    newArray.splice(i, 1);
    dispatch(deleteItem(newArray));
  };

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
        <div className="scroll">
          {user ? (
            userCart.length === 0 ? (
              <div style={{ fontWeight: "200", marginTop: "10px" }}>
                Your cart is currently empty.
              </div>
            ) : (
              userCart.map((item, i) => (
                <div key={i} className="cartItem">
                  <div className="topCartItem">
                    <img alt="" src={`https:${item.item.image}`}></img>
                    <div className="infoRight">
                      <li>{item.item.name}</li>
                      <li>{item.item.size}</li>

                      <div className="price">{`$${item.item.price}`}</div>
                      {/* <div className="itemAmount">
                        <img src={minus} alt=""></img>

                        <div className="amount">
                          {
                            userCart.filter(
                              (cart) => cart.item.name === item.item.name
                            ).length
                          }
                        </div>
                        <img alt="" src={plus}></img>
                      </div> */}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      db.collection(`${user.email}`).doc(item.id).delete()
                    }
                  >
                    REMOVE ITEM
                  </button>
                </div>
              ))
            )
          ) : cart.length === 0 ? (
            <div style={{ fontWeight: "200", marginTop: "10px" }}>
              Your cart is currently empty.
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={i} className="cartItem">
                <div className="topCartItem">
                  <img alt="" src={`https:${item.image}`}></img>
                  <div className="infoRight">
                    <li>{item.name}</li>
                    <li>{item.size}</li>

                    <div className="price">{`$${item.price}`}</div>
                    {/* <div className="itemAmount">
                      <img src={minus} alt=""></img>

                      <div className="amount">
                        {cart.filter((cart) => cart.name === item.name).length}
                      </div>
                      <img alt="" src={plus}></img>
                    </div> */}
                  </div>
                </div>
                <button onClick={() => itemDelete(i)}>REMOVE ITEM</button>
              </div>
            ))
          )}
        </div>
        {user ? (
          dataTotal ? (
            <footer>
              <div className="subtotal">{`SUBTOTAL: $${dataTotal}`}</div>
              <button>CHECKOUT</button>
            </footer>
          ) : (
            <div></div>
          )
        ) : total ? (
          <footer>
            <div className="subtotal">{`SUBTOTAL: $${total}`}</div>
            <button>CHECKOUT</button>
          </footer>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
}

export default Cart;
