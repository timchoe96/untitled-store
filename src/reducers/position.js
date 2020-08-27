const position = (state = { left: "-2000px", overflow: "auto" }, action) => {
  switch (action.type) {
    case "MENU_CLICK":
      return action.payload;

    default:
      return state;
  }
};

export default position;
