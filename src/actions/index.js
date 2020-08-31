var contentful = require("contentful");

var client = contentful.createClient({
  space: "dlipnuauv0sj",
  accessToken: "wE7IZ7NvcSRJkr8slwMR5ZM6zEByjDgC7y1nEn36gx4",
});

export const fetchItems = () => (dispatch) => {
  dispatch({ type: "REQUEST_ITEMS_PENDING" });
  client
    .getEntries({ content_type: "product" })
    .then((resp) =>
      dispatch({
        type: "REQUEST_ITEMS_SUCCESS",
        payload: resp.items.map((item) => item.fields),
      })
    )
    .catch((error) =>
      dispatch({ type: "REQUEST_ITEMS_FAILED", payload: error })
    );
};

export const mobileMenu = (position) => {
  return { type: "MENU_CLICK", payload: position };
};

export const shopMenu = (height) => {
  return { type: "PLUS_CLICK", payload: height };
};

export const setItem = (item) => {
  return { type: "ADD_ITEM", payload: item };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setUserItem = (list) => {
  return {
    type: "SET_USER_ITEM",
    payload: list,
  };
};

export const cartStyles = (style) => {
  return {
    type: "SET_STYLE",
    payload: style,
  };
};
