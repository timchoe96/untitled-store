const items = (state = { isPending: true, items: [], error: "" }, actions) => {
  switch (actions.type) {
    case "REQUEST_ITEMS_PENDING":
      return { ...state, isPending: true };
    case "REQUEST_ITEMS_SUCCESS":
      return { ...state, items: actions.payload, isPending: false };
    case "REQUEST_ITEMS_FAILED":
      return { ...state, error: actions.payload, isPending: false };

    default:
      return state;
  }
};

export default items;
