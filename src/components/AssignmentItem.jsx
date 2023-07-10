import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  display: grid;
  grid-template-areas:
    "title title title"
    "col1 col2 col3";
  grid-template-columns: repeat(3, 1fr);
  max-width: 700px;
  padding: 10px;
  border-bottom: rgba(0 0 0 / 5%) 1px solid;
`;

const StyledStrong = styled.strong`
  color: #353535;
  font-weight: bold;
  font-size: 13px;
`;

const Title = styled.h4`
  grid-area: title;
`;

const Col1 = styled.span`
  grid-area: col1;
`;

const Col2 = styled.span`
  grid-area: col2;
`;

const Col3 = styled.span`
  grid-area: col3;
`;

function AssignmentItem({ assignment }) {
  return (
    <Item className="assignment-item">
      <Title>
        <Link to={`/bokningar/${assignment.id}`}>{assignment.companyName}</Link>
      </Title>
      <Col1>
        <StyledStrong>Datum: </StyledStrong>
        {assignment.pickupDate.toDate().toLocaleDateString()}
        <div className="blank-space" />
        <StyledStrong>Reg-nummer: </StyledStrong>
        {assignment.carReg}
      </Col1>
      <Col2>
        <StyledStrong>Upphämtningsadress: </StyledStrong>
        {assignment.pickupAdress}
        <div className="blank-space" />
        <StyledStrong>Avlämningsadress: </StyledStrong>
        {assignment.dropoffAdress}
      </Col2>
      <Col3>
        <StyledStrong>Kontaktperson: </StyledStrong>
        {assignment.companyContact}
        <div className="blank-space" />
        <StyledStrong>Telefonnummer: </StyledStrong>
        {assignment.companyPhone}
      </Col3>
    </Item>
  );
}

export default AssignmentItem;
