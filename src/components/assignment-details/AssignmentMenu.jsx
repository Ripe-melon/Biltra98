import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 12px;
    margin: 4px;
    background-color: #f0f0f0;
    display: inline-block;

    &.active {
      background-color: #e3e3e3;
    }
  }
`;

const StyledLink = styled(Link)`
  &:focus {
    outline: none;
  }
`;

function AssignmentMenu({ id }) {
  const location = useLocation();
  const baseUrl = `/bokningar/${id}`;

  return (
    <StyledUl>
      <li
        className={(location.pathname === `${baseUrl}` && "active").toString()}
      >
        <StyledLink to={`${baseUrl}`}>Generell information</StyledLink>
      </li>
      <li
        className={(
          location.pathname === `${baseUrl}/kontakt` && "active"
        ).toString()}
      >
        <StyledLink to={`${baseUrl}/kontakt`}>Kontaktperson</StyledLink>
      </li>
    </StyledUl>
  );
}

export default AssignmentMenu;
