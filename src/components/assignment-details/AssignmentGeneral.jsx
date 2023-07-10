import EditAssignment from "../EditAssignment";

function AssignmentGeneral({ id, assignment }) {
  return (
    <>
      <br />
      <h3>Generell information</h3>
      <br />
      <EditAssignment id={id} assignment={assignment} />
    </>
  );
}

export default AssignmentGeneral;
