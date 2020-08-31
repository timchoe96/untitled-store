const itemListUser = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_ITEM":
      return [...action.payload];

    default:
      return state;
  }
};

export default itemListUser;
