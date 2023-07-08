import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import AssignmentList from "./components/AssignmentList";
import "./styles.css";
import { ToasterProvider } from "./context/ToasterContext";
import AssignmentDetails from "./components/AssignmentDetails";

function App() {
  return (
    <Router>
      <ToasterProvider>
        <div className="App">
          <h1>
            <Link to="/">BOKNINGSSYSTEM för BILTRANSPORTER</Link>
          </h1>

          <Routes>
            <Route path="/" element={<AssignmentList />} />
            <Route path="/assignment/:id/*" element={<AssignmentDetails />} />
          </Routes>
        </div>
      </ToasterProvider>
    </Router>
  );
}

export default App;
