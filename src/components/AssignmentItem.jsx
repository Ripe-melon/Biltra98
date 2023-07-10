import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 700px;
  padding: 10px;
  border-bottom: rgba(0 0 0 / 5%) 1px solid;
`;

function AssignmentItem({ assignment }) {
  return (
    <Item className="assignment-item">
      <h4>
        <Link to={`/bokningar/${assignment.id}`}>{assignment.companyName}</Link>
      </h4>
      <span>
        <strong>Datum: </strong>{" "}
        {assignment.pickupDate.toDate().toLocaleDateString()}
      </span>
      <span>
        <strong>Telefonnummer: </strong>
        {assignment.companyPhone}
      </span>{" "}
      <span>
        <strong>Kontaktperson: </strong>
        {assignment.companyContact}
      </span>
      <span>
        <strong>Upphämtningsadress: </strong>
        {assignment.pickupAdress}
      </span>
      <span>
        <strong>Avlämningsadress: </strong>
        {assignment.dropoffAdress}
      </span>
      <span>
        <strong>Reg-nummer: </strong>
        {assignment.carReg}
      </span>
    </Item>
  );
}

export default AssignmentItem;
