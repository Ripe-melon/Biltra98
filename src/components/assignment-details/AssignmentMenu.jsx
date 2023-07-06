import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 6px;
    margin: 4px;
    background-color: #f0f0f0;
    display: inline-block;

    &.active {
      background-color: #ccc;
    }
  }
`;

function AssignmentMenu({ id }) {
  const location = useLocation();
  const baseUrl = `/assignment/${id}`;

  return (
    <StyledUl>
      <li className={location.pathname === `${baseUrl}` ? "active" : undefined}>
        <Link to={`${baseUrl}`}>General information</Link>
      </li>
      <li
        className={
          location.pathname === `${baseUrl}/company-contact`
            ? "active"
            : undefined
        }
      >
        <Link to={`${baseUrl}/company-contact`}>Kontaktperson</Link>
      </li>
    </StyledUl>
  );
}

export default AssignmentMenu;
