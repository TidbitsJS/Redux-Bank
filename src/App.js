import React, { Component } from "react";
import "./App.css";
import formatNumber from "format-number";
import photgrapher from "./assets/girl.png";

class App extends Component {
  state = {
    username: "TidbitsJS",
    totalAmount: 1556301900,
  };

  render() {
    const { totalAmount, username } = this.state;
    return (
      <div className="App">
        <img className="App__userpic" src={photgrapher} alt="user" />
        <p className="App__username">Hello, {username}!</p>
        <div className="App_amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000">Withdraw $10,000</button>
          <button data-amount="5000">Withdraw $5000</button>
        </section>

        <p className="App_giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
