function AssignmentList({ assignments}) {
    return (
        <div className="assignment-list">
          <h2>Lista av bokningar</h2>
          {assignments.map((assignment) => (
            <div className="assignment-item" key={assignment.id}>
            <h4>{assignment.companyName}</h4>
            <span>
              <strong>Datum: </strong> {assignment.pickupDate.toDate().toLocaleDateString()}
            </span>
            <span>
              <strong>Telefonnummer: </strong>{assignment.companyPhone}
            </span>{" "}
            <span>
              <strong>Kontaktperson: </strong>{assignment.companyContact}
            </span>
            <span>
              <strong>Upphämtningsadress: </strong>{assignment.pickupAdress}
            </span>
            <span>
              <strong>Avlämningsadress: </strong>{assignment.dropoffAdress}
            </span>
            <span>
              <strong>Reg-nummer: </strong>{assignment.carReg}
            </span>
          </div>
          ))}
        </div>
    )
}

export default AssignmentList