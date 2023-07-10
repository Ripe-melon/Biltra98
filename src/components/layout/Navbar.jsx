import styled from "styled-components";
import { breakpoints as bp } from "../../styling/GlobalStyle";
import Backdrop from "../../ui/Backdrop";
import {
  mdiCarMultiple,
  mdiCarConnected,
  mdiCarSelect,
  mdiFaceAgent,
  mdiCog,
  mdiChartAreaspline,
  mdiHome,
} from "@mdi/js";
import NavLink from "./navbar/NavLink.jsx";
import { useState } from "react";
import NavToggle from "./navbar/NavToggle";

const StyledNav = styled.nav`
  background-color: black;
  width: ${(p) => (p.compact ? "70px" : "var(--navbar-width)")};
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  transition-property: width, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;

  .blank-space {
    padding-bottom: 46.5px;
  }

  .navlink-group {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 0 14px 0;
    margin-right: 2px;
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 4px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.4);
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  &::before {
    content: "";
    background-color: rgba(var(--color-secondary-rgb), 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media (max-width: ${bp.desktop}) {
    position: fixed;
    width: var(--navbar-width);
    transform: translate3d(
      ${(p) =>
        p.visible ? 0 : "calc(var(--navbar-width) - var(--navbar-width) * 2)"},
      0,
      0
    );
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 0.2, 1)"
          : "cubic-bezier(0, 0, 0.1, 1)"} !important;
  }
`;

function Navbar(props) {
  const [compact, setCompact] = useState(0);

  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav compact={compact} {...props}>
        <div className="blank-space" />

        <div className="navlink-group">
          <NavLink
            onClick={props.close}
            iconPath={mdiHome}
            toPath="/"
            label="Hem"
            compact={compact}
          />
          <NavLink
            onClick={props.close}
            iconPath={mdiCarSelect}
            toPath="/boka"
            label="Boka transport"
            compact={compact}
          />
          <NavLink
            onClick={props.close}
            iconPath={mdiCarConnected}
            toPath="/live"
            label="Spåra transport"
            compact={compact}
          />
          <NavLink
            onClick={props.close}
            iconPath={mdiCarMultiple}
            toPath="/bokningar"
            label="Bokningar"
            compact={compact}
          />
          <NavLink
            onClick={props.close}
            iconPath={mdiChartAreaspline}
            toPath="/statistik"
            label="Statistik"
            compact={compact}
          />
        </div>

        <NavLink
          onClick={props.close}
          iconPath={mdiFaceAgent}
          toPath="/support"
          label="Support"
          compact={compact}
        />
        <NavLink
          onClick={props.close}
          iconPath={mdiCog}
          toPath="/settings"
          label="Inställningar"
          compact={compact}
        />
        <NavToggle compact={compact} setCompact={setCompact} />
      </StyledNav>
    </>
  );
}

export default Navbar;
