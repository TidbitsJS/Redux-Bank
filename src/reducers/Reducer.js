const initialState = {
  username: "TidbitsJS",
  totalAmount: 1556301900,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREDIT":
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };

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
