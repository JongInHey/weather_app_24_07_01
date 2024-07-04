import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Menu = styled.div`
  font-size: 26px;
  cursor: pointer;
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

export const Header = ({ datas }) => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const days = date.getDay();
  return (
    <SHeader>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      <MyLocation>
        <h3>{datas.name}</h3>
        <p>
          {days}, {hour}:{min} pm
        </p>
      </MyLocation>
      <More>
        <FontAwesomeIcon icon={faPlus} />
      </More>
    </SHeader>
  );
};
