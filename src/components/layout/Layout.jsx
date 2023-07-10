import Header from "./Header";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

// Check grid with inspect, way easier.
const Grid = styled.div`
  display: grid;
  grid:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
`;

const GridNav = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

const GridHeader = styled.header`
  grid-area: header;
`;

const GridMain = styled.main`
  grid-area: main;
`;

function Layout({ children, ...rest }) {
  const [showNav, setShowNav] = useState(0);
  const auth = useAuth();

  const toggle = () => setShowNav(Number(!showNav));

  return (
    <Grid {...rest}>
      {auth.user && (
        <>
          <GridNav>
            <Navbar visible={showNav} close={toggle} />
          </GridNav>
          <GridHeader>
            <Header toggle={toggle} />
          </GridHeader>
        </>
      )}
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;
