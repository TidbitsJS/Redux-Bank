export default (state, action) => {
  switch (action.type) {
    case "WITHDRAW_10000":
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload,
      };

    case "WITHDRAW_5000":
      return state;

    default:
      return state;
  }
};
