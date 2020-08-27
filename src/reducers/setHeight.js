const setHeight = (state = "0", action) => {
  switch (action.type) {
    case "PLUS_CLICK":
      return action.payload;

    default:
      return state;
  }
};

export default setHeight;
