function AssignmentContact({ assignment }) {
  return (
    <>
      <h3>Kontaktperson</h3>
      <p>
        {assignment.companyContact
          ? assignment.companyContact
          : "Finns ingen kontaktperson."}
      </p>
    </>
  );
}

export default AssignmentContact;
