import React, { Component } from "react";
import formatNumber from "format-number";
import photgrapher from "./assets/girl.jpeg";
import { store } from "./store/Store";
import { credit, donate, withDraw } from "./actions/actions";

import "./App.css";

const dispatchWithDraw = (e) => {
  const amount = +e.target.dataset.amount;
  store.dispatch(withDraw(amount));
};

const dispatchDonate = () => {
  store.dispatch(donate());
};

const dispatchCredit = (e) => {
  const amount = +e.target.dataset.amount;
  store.dispatch(credit(amount));
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
          <button data-amount="50000" onClick={dispatchCredit}>
            Credit $50,000
          </button>
        </section>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchWithDraw}>
            Withdraw $10,000
          </button>
          <button data-amount="5000" onClick={dispatchWithDraw}>
            Withdraw $5000
          </button>
        </section>

        <p className="App_giveaway" onClick={dispatchDonate}>
          Give away all your cash to charity
        </p>
      </div>
    );
  }
}

export default App;
