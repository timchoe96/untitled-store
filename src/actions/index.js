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
