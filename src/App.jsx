// useEffect allows a functional component to use the event cycle.
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import AssignmentList from "./AssignmentList";
import { Button, Message } from "./ui/index";

function App() {
  const db = firebase.firestore();

  const [assignment, setAssignment] = useState({
    companyName: "",
    companyContact: "",
    companyPhone: "",
    pickupAdress: "",
    dropoffAdress: "",
    pickupDate: "",
    carReg: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // snapshot is like an iterable object, we can use it to look through our assignment list.
    (async () => {
      const snapshot = await db.collection("assignments").get()
      const assignmentsArray = [];
      snapshot.forEach(doc => {
        assignmentsArray.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setAssignments(assignmentsArray);
    })();
  }, []); //useEffect will only run when the props change [].

  const onChange = (e) => {
    setAssignment({
      ...assignment,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(assignment);

    setLoading(true);
      try {
        const docRef = await db.collection('assignments').add({
          ...assignment,
          pickupDate: new Date(assignment.pickupDate),
          companyPhone: parseInt(assignment.companyPhone)
        })
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
          //if it throws error, we will catch it
      } catch (e) {
        console.error("An error has occured: ", error);
        setError("An error has occured while saving assignment.");
      }
    //for either case we set loading to false
    setLoading(false);
  }

  /* Hur det hade sett med kod duplicering:
  const onCompanyChange = (e) => {
    setAssignment({
      ...assignment,
      companyName: e.target.value
    })
  } */

  return (
      <div className="App">
        <h1>BOKNINGSSYSTEM för BILTRANSPORTER</h1>

        <h2>Lägg till ny bokning</h2>

        
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="company-name">Företag</label>
            <input type="text" value={assignment.companyName} onChange={onChange} name="companyName" id="company-id" />
          </div>

          <div>
            <label htmlFor="contact-name">Kontaktperson</label>
            <input type="text" value={assignment.companyContact} onChange={onChange} name="companyContact" id="contact-id" />
          </div>

          <div>
            <label htmlFor="phone-number">Telefonnummer</label>
            <input type="text" value={assignment.companyPhone} onChange={onChange} name="companyPhone" id="phone-id" />
          </div>
          
          <div>
            <label htmlFor="pickup-adress">Upphämtning</label>
            <input type="text" value={assignment.pickupAdress} onChange={onChange} name="pickupAdress" id="pickup-adress" />
          </div>

          <div>
            <label htmlFor="dropoff-adress">Avlämning</label>
            <input type="text" value={assignment.dropoffAdress} onChange={onChange} name="dropoffAdress" id="dropoff-adress" />
          </div>

          <div>
            <label htmlFor="date-pickup">Datum</label>
            <input type="date" value={assignment.pickupDate} onChange={onChange} name="pickupDate" id="date-pickup" />
          </div>

          <div>
            <label htmlFor="car-reg">Reg-nummer</label>
            <input type="text" value={assignment.carReg} onChange={onChange} name="carReg" id="car-reg" />
          </div>

          <div>
           <Button loading={loading} label="Save" type="submit"/>
          </div>
        <Message error={error} type="error" />
        </form>

        <AssignmentList assignments={assignments}/>
      </div>
  );
}

export default App