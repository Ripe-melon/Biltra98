import styled, { css } from "styled-components";
import { Loading } from "../ui";

const ButtonStyled = styled.button`
  border: 1px solid var(--color-border);
  background-color: var(--color-${(p) => p.variant || "light"});
  color: var(--color-${(p) => p.variant || "light"}-contrast);
  height: var(--height-button);
  width: auto;
  min-width: var(--min-width-button);
  padding: 0px var(--px-button);
  font-weight: bold;
  border-radius: var(--border-radius);
  font-size: var(--fsize-3);
  cursor: pointer;

  &:hover {
    background-color: var(--color-${(p) => p.variant || "light"}-hover);
    border-color: var(--color-border-hover);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }

  ${
    (props) =>
      props.outline &&
      css`
        border-color: var(--color-${(p) => p.variant || "light"});
        background-color: transparent;
        color: var(--color-${(p) => p.variant || "light"});

        &:hover {
          background-color: var(--color-${(p) => p.variant || "light"});
          color: var(--color-${(p) => p.variant || "light"}-contrast);
        }
        :active {
          box-shadow: none;
        }
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
