import AssignmentForm from "../components/AssignmentForm";
import Page from "../ui/Page";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToasterContext } from "../context/ToasterContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Boka() {
  const [loading, setLoading] = useState(false);
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

  return (
    <Page title="Boka en ny biltransport.">
      <ToasterContext.Consumer>
        {({ addToast }) => (
          <>
            <div title="Lägg till ny bokning!">
              <br />
              <br />
              {/* writing {...{exempel, exempel2}} is shortcut for props when the names are the same. */}
              <AssignmentForm
                {...{ loading, assignment, setAssignment, error }}
                onSubmit={onSubmit.bind(this, addToast)}
              />
            </div>
          </>
        )}
      </ToasterContext.Consumer>
    </Page>
  );
}

export default Boka;
