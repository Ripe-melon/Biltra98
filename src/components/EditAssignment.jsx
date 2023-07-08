import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { ToasterContext } from "../context/ToasterContext";
import AssignmentForm from "./AssignmentForm";

function EditAssignment(props) {
  // const db = firebase.firestore(); OBS! NOT NEEDED SINCE USING ONCE.

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [assignment, setAssignment] = useState({
    companyName: props.assignment.companyName,
    companyContact: props.assignment.companyContact,
    companyPhone: props.assignment.companyPhone,
    pickupAdress: props.assignment.pickupAdress,
    dropoffAdress: props.assignment.dropoffAdress,
    pickupDate: props.assignment.pickupDate.toDate().toISOString().slice(0, 10),
    carReg: props.assignment.carReg,
  });

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await firebase
        .firestore()
        .collection("assignments")
        .doc(props.id)
        .set(
          {
            ...assignment,
            pickupDate: new Date(assignment.pickupDate),
            companyPhone: parseInt(assignment.companyPhone),
          },
          { merge: true }
        );
      addToast({
        text: "Successfully updated the assignment.",
        type: "success",
      });
      //if it throws error, we will catch it
    } catch (e) {
      console.error("An error has occured: ", e); //Here it might be smart to log "e" instead of "error".
      setError("An error occured while trying to update assignment.");
    }
    //for either case we set loading to false
    setLoading(false);
  };

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <AssignmentForm
          {...{ loading, assignment, setAssignment, error }}
          onSubmit={onSubmit.bind(this, addToast)}
        />
      )}
    </ToasterContext.Consumer>
  );
}

export default EditAssignment;
