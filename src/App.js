import React, { Component } from "react";
import "./App.css";
import formatNumber from "format-number";
import photgrapher from "./assets/girl.png";
import { store } from "./store/Store";

const dispatchWith = (e) => {
  const amount = +e.target.dataset.amount;
  if (amount === 10000) {
    store.dispatch({ type: "WITHDRAW_10000", payload: amount });
  } else {
    store.dispatch({ type: "WITHDRAW_5000", payload: amount });
  }
};

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photgrapher} alt="user" />
        <p className="App__username">Hello, {username}!</p>
        <div className="App_amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchWith}>
            Withdraw $10,000
          </button>
          <button data-amount="5000" onClick={dispatchWith}>
            Withdraw $5000
          </button>
        </section>

        <p className="App_giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
