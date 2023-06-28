// useEffect allows a functional component to use the event cycle.
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AssignmentList from "./components/AssignmentList";
import { Button, Message, Field, Modal } from "./ui/index";
import "./styles.css";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [isModal, setIsModal] = useState(false);

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

  const onChange = (e) => {
    setAssignment({
      ...assignment,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(assignment);

    setLoading(true);
    try {
      const docRef = await db.collection("assignments").add({
        ...assignment,
        pickupDate: new Date(assignment.pickupDate),
        companyPhone: parseInt(assignment.companyPhone),
      });
      //if success
      console.log(docRef.id);
      //reset assignment
      setAssignment({
        companyName: "",
        companyContact: "",
        companyPhone: "",
        pickupAdress: "",
        dropoffAdress: "",
        pickupDate: "",
        carReg: "",
      });
      setIsModal(false);
      //if it throws error, we will catch it
    } catch (e) {
      console.error("An error has occured: ", error);
      setError("An error has occured while saving assignment.");
    }
    //for either case we set loading to false
    setLoading(false);
  };

  /* Hur det hade sett med kod duplicering:
  const onCompanyChange = (e) => {
    setAssignment({
      ...assignment,
      companyName: e.target.value
    })
  } */

  const modalShow = (v) => setIsModal(v); //possible to pass event like (variabel, e)

  return (
    <div className="App">
      <h1>BOKNINGSSYSTEM för BILTRANSPORTER</h1>
      <div>
        <button onClick={modalShow.bind(this, true)}>
          Lägg till ny bokning
        </button>
      </div>

      <Modal
        title="Lägg till ny bokning!"
        show={isModal}
        close={modalShow.bind(this, false)}
      >
        <form onSubmit={onSubmit}>
          <Field labelText="Företag" id="company-name">
            <input
              type="text"
              value={assignment.companyName}
              onChange={onChange}
              name="companyName"
              id="company-name"
            />
          </Field>

          <Field labelText="Kontaktperson" id="company-contact">
            <input
              type="text"
              value={assignment.companyContact}
              onChange={onChange}
              name="companyContact"
              id="contact-contact"
            />
          </Field>

          <Field labelText="Telefonnummer" id="company-phone">
            <input
              type="text"
              value={assignment.companyPhone}
              onChange={onChange}
              name="companyPhone"
              id="company-phone"
            />
          </Field>

          <Field labelText="Upphämtning" id="pickup-adress">
            <input
              type="text"
              value={assignment.pickupAdress}
              onChange={onChange}
              name="pickupAdress"
              id="pickup-adress"
            />
          </Field>

          <Field labelText="Avlämningsadress" id="dropoff-adress">
            <input
              type="text"
              value={assignment.dropoffAdress}
              onChange={onChange}
              name="dropoffAdress"
              id="dropoff-adress"
            />
          </Field>

          <Field labelText="Datum" id="date-pickup">
            <input
              type="date"
              value={assignment.pickupDate}
              onChange={onChange}
              name="pickupDate"
              id="date-pickup"
            />
          </Field>

          <Field labelText="Reg-nummer" id="car-reg">
            <input
              type="text"
              value={assignment.carReg}
              onChange={onChange}
              name="carReg"
              id="car-reg"
            />
          </Field>

          <div>
            <Button loading={loading} label="Save" type="submit" />
          </div>
          <Message error={error} type="error" />
        </form>
      </Modal>
      <AssignmentList assignments={assignments} />
    </div>
  );
}

export default App;
