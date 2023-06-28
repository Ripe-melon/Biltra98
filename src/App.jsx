// useEffect allows a functional component to use the event cycle.
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AssignmentList from "./components/AssignmentList";
import AssignmentForm from "./components/AssignmentForm";
import "./styles.css";
import { ToasterProvider } from "./context/ToasterContext";

function App() {
  const db = firebase.firestore();

  const [assignment, setAssignment] = useState({
    companyName: "",
    companyContact: "",
    companyPhone: "",
    pickupAdress: "",
    dropoffAdress: "",
    pickupDate: "",
    carReg: "",
  });

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
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
    <ToasterProvider>
      <div className="App">
        <h1>BOKNINGSSYSTEM för BILTRANSPORTER</h1>

        <AssignmentForm assignment={assignment} setAssignment={setAssignment} />

        <AssignmentList assignments={assignments} />
      </div>
    </ToasterProvider>
  );
}

export default App;
