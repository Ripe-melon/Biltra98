import Divider from "./Divider";
import styled from "styled-components";

const Header = styled.div`
  min-height: 38px;
  padding: 24px 24px;
  margin: 10;
`;

const Content = styled.div`
  padding: 0px 24px;
`;

function Page({ title, children, ...rest }) {
  return (
    <div {...rest}>
      <Header>
        <h1>{title}</h1>
        <Divider />
      </Header>
      <Content>{children}</Content>
    </div>
  );
}

export default Page;
