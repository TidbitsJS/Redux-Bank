import React, { Component } from "react";
import "./App.css";
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
        <div className="App_amount"></div>
      </div>
    );
  }
}

export default App;
