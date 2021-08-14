import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100%;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 50%,
    #fdf6f6 50%,
    #fdf6f6 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const UserPicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  align-self: center;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.05);
`;

export const AmountContainer = styled.div`
  position: relative;
  align-self: center;
  background: #fff;
  color: #708090;
  font-size: 2.1rem;
  font-weight: bold;
  padding: 2.5rem 4rem 2.5rem;
  border-radius: 11px;
  margin: 0rem 0 2rem 0;
  box-shadow: 0 10px 5px 5px rgba(0, 0, 0, 0.02);

  &:after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 90%;
    height: 100%;
    top: 10%;
    left: 5%;
    background: #fff;
    box-shadow: 0 5px 34px 23px rgba(0, 0, 0, 0.06);
    border-radius: 11px;
  }
`;

export const AmountInfo = styled.p`
  font-size: 2rem;
  color: black;
`;

export const CustomButton = styled.button`
  outline: 0;
  background: #fff;
  color: #fe718f;
  font-size: 1rem;
  padding: 1rem;
  border: 0;
  box-shadow: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 1rem 2rem;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.05);
`;

export const Giveaway = styled.p`
  font-size: 0.7rem;
  color: #fe8183;
  cursor: pointer;
  font-size: 1rem;
`;
