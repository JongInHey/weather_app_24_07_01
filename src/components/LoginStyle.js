import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  .home {
    color: #111;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export const Container = styled.div`
  max-width: 450px;
  height: 650px;
  width: 100%;
  margin-top: 100px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 100px 20px 50px;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 50px;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: 30px;
  }

  input {
    all: unset;
    width: 100%;
    height: 45px;
    border: 1px solid #dbdbdb;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 10px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  border-radius: 10px;
  margin-top: 15px;
  font-weight: 700;
  color: white;
  opacity: ${(props) => (props.$isBtnActive ? "1" : "0.5")};
  cursor: ${(props) => (props.$isBtnActive ? "pointer" : "default")};
`;

export const Seper = styled.div`
  display: flex;
  margin: 40px 0;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  color: #808080;
`;

export const Line = styled.div`
  width: 40%;
  height: 1px;
  background-color: #dbdbdb;
`;

export const TextWrap = styled.div`
  text-align: center;
  a {
    color: royalblue;
    text-decoration: underline;
  }
`;
