import React, { Component } from "react";
import formatNumber from "format-number";
import photgrapher from "./assets/girl.jpeg";
import { store } from "./store/Store";
import { credit, donate, withDraw } from "./actions/actions";
import {
  AppContainer,
  UserName,
  UserPicture,
  AmountContainer,
  AmountInfo,
  CustomButton,
  Giveaway,
} from "./styled/styled.styles";

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
      <AppContainer>
        <UserPicture src={photgrapher} alt="user" />
        <UserName>Hello, {username}!</UserName>
        <AmountContainer>
          {formatNumber({ prefix: "$" })(totalAmount)}
          <AmountInfo>Total Amount</AmountInfo>
        </AmountContainer>

        <section>
          <CustomButton data-amount="50000" onClick={dispatchCredit}>
            Credit $50,000
          </CustomButton>
        </section>

        <section>
          <CustomButton data-amount="10000" onClick={dispatchWithDraw}>
            Withdraw $10,000
          </CustomButton>
          <CustomButton data-amount="5000" onClick={dispatchWithDraw}>
            Withdraw $5000
          </CustomButton>
        </section>

        <Giveaway onClick={dispatchDonate}>
          Give away all your cash to charity
        </Giveaway>
      </AppContainer>
    );
  }
}

export default App;
