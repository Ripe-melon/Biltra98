import styled, { css } from "styled-components";
import { ToasterContext } from "../context/ToasterContext";
import Toaster from "./Toaster";

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
      `
    /*Above is a shortcut that returns instantly, original looks like:
    ${props => {
        return props.outline && css`
            border: 1px solid lightGray;
            background-color: transparent;
        `; */
  }
`;

function Button({ loading, label, ...rest }) {
  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <ButtonStyled
          disabled={loading}
          {...rest}
          onClick={() => addToast("My toast")} // need to provide a function to run, thus ()
        >
          {loading ? "Loading" : label}
        </ButtonStyled>
      )}
    </ToasterContext.Consumer>
  );
}

export default Button;
