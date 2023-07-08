function AssignmentContact({ assignment, id }) {
  return (
    <>
      <h3>Kontaktperson:</h3>
      <p>
        {assignment.companyContact
          ? assignment.companyContact
          : "Finns ingen kontaktperson."}
      </p>
      <h3>Telefonnummer:</h3>
      <p>
        {assignment.companyPhone
          ? assignment.companyPhone
          : "Finns inget telefonnummer."}
      </p>
      <h3>Verifieringskod:</h3>
      <p>{id ? id : "Finns inget verifieringsnummer."}</p>
    </>
  );
}

export default AssignmentContact;
