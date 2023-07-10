import { useAuth } from "../../context/authContext";
import { Button, Divider } from "../../ui";
import styled from "styled-components";
import Logo from "./navbar/Logo";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { breakpoints as bp } from "../../styling/GlobalStyle";

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr 1fr 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;

  .username {
    justify-content: end;
    padding-right: 10px;
  }

  .mid {
    justify-content: center;
  }

  > div {
    display: flex;
    align-items: center;
  }
  button {
    white-space: nowrap;
  }
  &:first-child {
    font-size: var(--fsize-5);
    i {
      display: none;
      @media (max-width: ${bp.desktop}) {
        display: inline;
      }
    }
  }
`;

function Header({ toggle }) {
  const auth = useAuth();

  return (
    <>
      <Grid>
        <div onClick={toggle}>
          <i>
            <Icon path={mdiMenu} title="Menu" size={1} />
          </i>
        </div>
        <div></div>
        <div className="mid">
          <Logo />
        </div>
        <div className="username">{`Welcome, ${auth.user.email}`}</div>
        <div>
          <Button onClick={async () => await auth.signOut()}>Sign Out</Button>
        </div>
      </Grid>
    </>
  );
}

export default Header;
