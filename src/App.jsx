import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import AssignmentList from "./components/AssignmentList";
import "./styles.css";
import { ToasterProvider } from "./context/ToasterContext";
import AssignmentDetails from "./components/AssignmentDetails";
import { AuthProvider } from "./context/authContext";
import Header from "./components/layout/Header";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToasterProvider>
          <div className="App">
            <Header />

            <Routes>
              <Route path="/" element={<h2>Welcome to Biltra</h2>} />
              <Route
                path="/assignments" //PROTECTED
                element={
                  <PrivateRoute>
                    <AssignmentList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/assignment/:id/*" //PROTECTED
                element={
                  <PrivateRoute>
                    <AssignmentDetails />
                  </PrivateRoute>
                }
              />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </ToasterProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
