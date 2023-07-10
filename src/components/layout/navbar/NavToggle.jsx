import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { useState } from "react";
import { breakpoints as bp } from "../../../styling/GlobalStyle";

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 42px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 24px;
  text-align: ${(p) => (p.compact ? "center" : "right")};

  @media (max-width: ${bp.desktop}) {
    display: none;
  }
`;

function NavToggle(props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Button
      {...props}
      className="nav-toggle"
      onClick={() => {
        props.setCompact(Number(!props.compact));
        setFlipped(!flipped);
      }}
    >
      <Icon path={mdiArrowLeft} size={0.9} horizontal={flipped} />
    </Button>
  );
}

export default NavToggle;
