const cart = (
  state = {
    background: "rgba(0, 0, 0, 0)",
    pointer: "none",
    position: "-100vw",
  },
  action
) => {
  switch (action.type) {
    case "SET_STYLE":
      return action.payload;

    default:
      return state;
  }
};

export default cart;
