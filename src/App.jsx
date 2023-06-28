import AssignmentList from "./components/AssignmentList";
import AssignmentForm from "./components/AssignmentForm";
import "./styles.css";
import { ToasterProvider } from "./context/ToasterContext";

function App() {
  return (
    <ToasterProvider>
      <div className="App">
        <h1>BOKNINGSSYSTEM för BILTRANSPORTER</h1>

        <AssignmentForm />

        <AssignmentList />
      </div>
    </ToasterProvider>
  );
}

export default App;
