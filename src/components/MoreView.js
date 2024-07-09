import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => props.$showbox};
  padding: 150px 50px;
  box-sizing: border-box;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    width: 100%;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const Exit = styled.div`
  width: 100%;
  height: 30px;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;

export const MoreView = ({ view, setView, setMoreActive }) => {
  const exitHandler = () => {
    setView("none");
    setMoreActive(true);
  };
  return (
    <Wrap $showbox={view}>
      <ConWrap>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>SignUP</Link>
        <Exit onClick={exitHandler}>나가기</Exit>
      </ConWrap>
    </Wrap>
  );
};
