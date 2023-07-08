import EditAssignment from "../EditAssignment";

function AssignmentGeneral({ id, assignment }) {
  return (
    <>
      <h3>Generell information</h3>
      <EditAssignment id={id} assignment={assignment} />
    </>
  );
}

export default AssignmentGeneral;
