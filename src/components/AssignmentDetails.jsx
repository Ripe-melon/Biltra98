// Will display details for a assignment and allow to edit assignments.
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useParams, Link, Route, Routes } from "react-router-dom";
import { Loading } from "../ui";
import AssignmentContact from "./assignment-details/AssignmentContact";
import AssignmentGeneral from "./assignment-details/AssignmentGeneral";
import AssignmentMenu from "./assignment-details/AssignmentMenu";

function AssignmentDetails() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const docRef = await firebase
          .firestore()
          .collection("assignments")
          .doc(id);
        const doc = await docRef.get();
        setAssignment(doc.data());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  if (!assignment) return <Loading />;

  return (
    <div>
      <h2>Assignment details</h2>
      <AssignmentMenu id={id} />

      <Routes>
        <Route
          path="/"
          element={<AssignmentGeneral assignment={assignment} />}
        />
        <Route
          path="company-contact"
          element={<AssignmentContact assignment={assignment} />}
        />
      </Routes>
    </div>
  );
}

export default AssignmentDetails;
