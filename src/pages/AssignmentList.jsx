// useEffect allows a functional component to use the event cycle.
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AssignmentItem from "../components/AssignmentItem";
import AddAssignment from "../components/AddAssignment";
import { Loading } from "../ui";
import Page from "../ui/Page";

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    // snapshot is like an iterable object, we can use it to look through our assignment list.
    (async () => {
      const snapshot = await db.collection("assignments").get();
      const assignmentsArray = [];
      snapshot.forEach((doc) => {
        assignmentsArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setAssignments(assignmentsArray);
    })();
  }, []); //useEffect will only run when the props change [].

  return (
    <Page title="Bokningslista" className="assignment-list">
      <AddAssignment />
      <br />
      <br />
      {!assignments.length ? (
        <Loading />
      ) : (
        assignments.map((assignment) => (
          <AssignmentItem assignment={assignment} key={assignment.id} />
        ))
      )}
    </Page>
  );
}

export default AssignmentList;
