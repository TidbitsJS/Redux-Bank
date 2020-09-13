export default (state, action) => {
  switch (action.type) {
    case "WITHDRAW_10000":
      if (state.totalAmount < 10000) {
        return state;
      } else {
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload,
        };
      }

    case "WITHDRAW_5000":
      console.log(state.totalAmount);
      if (state.totalAmount < 5000) {
        return state;
      } else {
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload,
        };
      }

    case "DONATE":
      return {
        ...state,
        totalAmount: 0,
      };

    default:
      return state;
  }
};
