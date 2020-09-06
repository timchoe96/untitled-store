import React, { useEffect, useState } from "react";
import "./styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { cartStyles } from "../../actions/index.js";
import { db } from "../../firebase.js";
import { deleteItem } from "../../actions/index.js";
import { cartTotal } from "../../actions/index.js";
import { cartTotalData } from "../../actions/index.js";
import minus from "./images/minus.png";
import plus from "./images/plus.png";
import { setItem } from "../../actions/index.js";

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
  let cartNew = [];
  let filteredCart = [];
  let cartNewUser = [];
  let filteredCartUser = [];

  const cartClose = () => {
    dispatch(
      cartStyles({
        position: "-600px",
        background: "rgba(0,0,0,0)",
        pointer: "none",
      })
    );
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  };

  // For not logged in users, the cart will be rendered with the 3 fuunctions below

  function setCart() {
    // cart.reverse().sort(function (a, b) {
    //   if (a.name < b.name) {
    //     return 0;
    //   } else if (a.name > b.name) {
    //     return 0;
    //   } else {
    //     if (a.size < b.size) {
    //       return -1;
    //     } else if (a.size > b.size) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   }
    // });

    cart.forEach(
      (item) =>
        !filteredCart.filter(
          (cart) => (cart.name === item.name) & (cart.size === item.size)
        ).length > 0 && filteredCart.push(item)
    );

    filteredCart.forEach((item) =>
      cartNew.push(
        cart.filter((i) => (i.name === item.name) & (i.size === item.size))
      )
    );
  }
  // end of local cart render

  function setCartUser() {
    // userCart.reverse().sort(function (a, b) {
    //   if (a.item.name < b.item.name) {
    //     return 0;
    //   } else if (a.item.name > b.item.name) {
    //     return 0;
    //   } else {
    //     if (a.item.size < b.item.size) {
    //       return -1;
    //     } else if (a.item.size > b.item.size) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   }
    // });

    userCart.forEach(
      (item) =>
        !filteredCartUser.filter(
          (cart) =>
            (cart.item.name === item.item.name) &
            (cart.item.size === item.item.size)
        ).length > 0 && filteredCartUser.push(item)
    );

    filteredCartUser.forEach((item) =>
      cartNewUser.push(
        userCart.filter(
          (i) =>
            (i.item.name === item.item.name) & (i.item.size === item.item.size)
        )
      )
    );
  }

  useEffect(() => {
    user
      ? dispatch(
          cartTotalData(userCart.reduce((acc, val) => acc + val.item.price, 0))
        )
      : dispatch(cartTotal(cart.reduce((acc, val) => acc + val.price, 0)));
  }, [cart, dispatch, user, userCart]);

  // remove item from cart
  const itemDelete = (i) => {
    let newArray = cartNew;
    newArray.splice(i, 1);
    dispatch(deleteItem(newArray.flat()));
  };

  const plusItem = (i) => {
    dispatch(
      setItem({
        name: i.name,
        price: i.price,
        size: i.size,
        image: i.image,
      })
    );
  };

  const minusItem = (i) => {
    let newArray = cartNew;
    newArray[i].splice(0, 1);
    dispatch(deleteItem(newArray.flat()));
    console.log(newArray);
  };

  user ? setCartUser() : setCart();

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
            // This is the cart for when you are logged in
            userCart.length === 0 ? (
              <div style={{ fontWeight: "200", marginTop: "10px" }}>
                Your cart is currently empty.
              </div>
            ) : (
              cartNewUser.map((item, i) => (
                <div key={i} className="cartItem">
                  <div className="topCartItem">
                    <img alt="" src={`https:${item[0].item.image}`}></img>
                    <div className="infoRight">
                      <ul>
                        <li>{item[0].item.name}</li>
                        <li>{`Size: ${item[0].item.size}`}</li>
                      </ul>
                      <div className="price">{`$${item[0].item.price}`}</div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      db.collection(`${user.email}`).doc(item[0].id).delete()
                    }
                  >
                    REMOVE ITEM
                  </button>
                </div>
              ))
            )
          ) : // This is the cart for when you are not logged in
          cartNew.length === 0 ? (
            <div style={{ fontWeight: "200", marginTop: "10px" }}>
              Your cart is currently empty.
            </div>
          ) : (
            cartNew.map((item, i) => (
              <div key={i} className="cartItem">
                <div className="topCartItem">
                  <img alt="" src={`https:${item[0].image}`}></img>
                  <div className="infoRight">
                    <ul>
                      <li>{item[0].name}</li>
                      <li>{`Size: ${item[0].size}`}</li>
                    </ul>
                    <div className="add_minus">
                      <img
                        onClick={() => minusItem(i)}
                        src={minus}
                        alt=""
                      ></img>
                      <div>{item.length}</div>
                      <img
                        onClick={() => plusItem(item[0])}
                        src={plus}
                        alt=""
                      ></img>
                    </div>
                    <div className="price">{`$${item[0].price}`}</div>
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
