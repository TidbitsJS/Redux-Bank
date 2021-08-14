export const credit = (payload) => ({
  type: "CREDIT",
  payload,
});

export const withDraw = (payload) => ({
  type: payload === 10000 ? "WITHDRAW_10000" : "WITHDRAW_5000",
  payload,
});

export const donate = () => ({
  type: "DONATE",
});
