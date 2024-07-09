import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../components/Title";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #d4d4d4;
  color: #333;
  h1 {
    font-size: 72px;
    margin-bottom: 16px;
  }
  p {
    font-size: 24px;
    margin-bottom: 24px;
  }
  a {
    padding: 12px 24px;
    font-size: 18px;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Title titleName={"404 NotFoundPage"} />
      <h1>404</h1>
      <p>NotFoundPage</p>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/">Home으로 돌아가기</Link>
    </Container>
  );
};
