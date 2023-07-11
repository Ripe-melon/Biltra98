import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Button, Modal } from "../ui/index";
import { ToasterContext } from "../context/ToasterContext";
import { useNavigate } from "react-router-dom";
import AssignmentForm from "./AssignmentForm";

function AddAssignment() {
  // const db = firebase.firestore(); OBS! NOT NEEDED SINCE USING ONCE.

  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const today = new Date();
  const date = today.toISOString().slice(0, 10);

  const assignmentObj = {
    companyName: "",
    companyContact: "",
    companyPhone: "",
    pickupAdress: "",
    dropoffAdress: "",
    pickupDate: date,
    carReg: "",
  };

  const [assignment, setAssignment] = useState({ ...assignmentObj });

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await firebase
        .firestore()
        .collection("assignments")
        .add({
          ...assignment,
          pickupDate: new Date(assignment.pickupDate),
          companyPhone: parseInt(assignment.companyPhone),
        });
      //if success
      console.log(docRef.id);
      //reset assignment NOT NEEDED SINCE REDIRECTING.
      //setAssignment({ ...assignmentObj });
      //setIsModal(false); NOT NEEDED SINCE REDIRECTING.
      addToast({
        text: "Successfully added booking assignment.",
        type: "success",
      });
      //redirect to book details
      navigate(`/bokningar/${docRef.id}`);
      //if it throws error, we will catch it
    } catch (e) {
      console.error("An error has occured: ", error); //Here it might be smart to log "e" instead of "error".
      setError("An error occured while tryint to save assignment.");
      setLoading(false);
    }
  };

  const modalShow = (v) => setIsModal(v); //possible to pass event like (variabel, e)

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <div>
            <Button
              variant="primary"
              onClick={modalShow.bind(this, true)}
              outline
            >
              Lägg till ny bokning
            </Button>
          </div>

          <Modal
            title="Lägg till ny bokning."
            show={isModal}
            close={modalShow.bind(this, false)}
          >
            <br />
            <br />
            {/* writing {...{exempel, exempel2}} is shortcut for props when the names are the same. */}
            <AssignmentForm
              {...{ loading, assignment, setAssignment, error }}
              onSubmit={onSubmit.bind(this, addToast)}
            />
          </Modal>
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default AddAssignment;
