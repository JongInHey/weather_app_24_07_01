import { faBars, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Gnb } from "./Gnb";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  z-index: 99;
`;

const Menu = styled.div`
  font-size: 26px;
  cursor: pointer;
  z-index: 99;
`;

const MyLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const More = styled.div`
  font-size: 26px;
  cursor: pointer;
`;

export const Header = ({ headerData }) => {
  const [dates, setDates] = useState();
  const [show, setShow] = useState("-450px");
  const [active, setActive] = useState(true);

  const timeHandler = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    const days = date.getDay();
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    const day = dayList[days];

    const dateString = `${day}요일, ${hour}:${min}:${sec} ${
      hour >= 12 ? "pm" : "am"
    }`;
    setDates(dateString);
  };

  useEffect(() => {
    timeHandler();
    setInterval(timeHandler, 1000);
  }, []);

  const menuHandler = () => {
    if (active) {
      setShow("0");
      setActive(false);
    } else if (!active) {
      setShow("-450px");
      setActive(true);
    }
  };

  return (
    <SHeader>
      <Gnb show={show} data={headerData} />
      <Menu onClick={menuHandler}>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      <MyLocation>
        <h3>{headerData.name}</h3>
        <p>{dates}</p>
      </MyLocation>
      <More>
        <FontAwesomeIcon icon={faPlus} />
      </More>
    </SHeader>
  );
};
