const itemList = (
  state = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default itemList;
