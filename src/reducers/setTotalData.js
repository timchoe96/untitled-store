const setTotalData = (state = 0, action) => {
  switch (action.type) {
    case "SET_PRICE_DATA":
      return action.payload;

    default:
      return state;
  }
};

export default setTotalData;
