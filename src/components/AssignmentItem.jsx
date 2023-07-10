import { Link } from "react-router-dom";

function AssignmentItem({ assignment }) {
  return (
    <div className="assignment-item">
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
    </div>
  );
}

export default AssignmentItem;
