import styled, { css } from "styled-components";
import { Loading } from "../ui";

const ButtonStyled = styled.button`
  border: none;
  background-color: DodgerBlue;
  padding: 8px 20px;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  font-size: 15px;
  ${
    (props) =>
      props.outline &&
      css`
        border: 1px solid lightGray;
        background-color: transparent;
        color: black;
      `
    /*Above is a shortcut that returns instantly, original looks like:
    ${props => {
        return props.outline && css`
            border: 1px solid lightGray;
            background-color: transparent;
        `; */
  }
`;

function Button({ loading, ...rest }) {
  return (
    <ButtonStyled disabled={loading} {...rest}>
      {loading ? <Loading /> : rest.children}
    </ButtonStyled>
  );
}

export default Button;
