import {
  faCircleExclamation,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MenuShow = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 0.4s;
  position: absolute;
  top: 0;
  left: ${(props) => props.$sdisplay};
  z-index: 98;
  padding: 40px;
  box-sizing: border-box;
`;
const SetWrap = styled.div`
  font-size: 24px;
  text-align: right;
  margin-bottom: 50px;
  cursor: pointer;
`;

const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  height: 44px;
  h3 {
    margin-left: 80px;
  }

  span {
    display: block;
    font-size: 20px;
    transform: translate(30px, -25px);
  }
`;

const Location = styled.div`
  width: 60%;
  height: 40px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-top: 2px dashed rgba(255, 255, 255, 0.3);
  margin-top: 20px;
`;
const ErrorLocation = styled.div`
  margin-top: 20px;
  display: flex;
  p {
    margin-left: 7px;
  }
`;
export const Gnb = ({ show, data }) => {
  return (
    <MenuShow $sdisplay={show}>
      <SetWrap>
        <FontAwesomeIcon icon={faSearch} />
      </SetWrap>
      <TempWrap>
        <FontAwesomeIcon icon={faLocationDot} />
        <h2>{data.name}</h2>
        <h3>{data.weather[0].main}</h3>
        <p>{Math.round(data.main.temp)}°</p>
      </TempWrap>
      <Location>
        <p>지역 관리</p>
      </Location>
      <Line />
      <ErrorLocation>
        <FontAwesomeIcon icon={faCircleExclamation} />
        <p>잘못된 지역명 신고하기</p>
      </ErrorLocation>
    </MenuShow>
  );
};
