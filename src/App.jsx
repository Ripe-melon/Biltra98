import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import AssignmentList from "./pages/AssignmentList";
import { ToasterProvider } from "./context/ToasterContext";
import AssignmentDetails from "./pages/AssignmentDetails";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./PrivateRoute";
import GlobalStyle from "./styling/GlobalStyle";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <ToasterProvider>
          <div className="App">
            <Routes>
              <Route
                path="/" //PROTECTED
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bokningar" //PROTECTED
                element={
                  <PrivateRoute>
                    <AssignmentList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bokningar/:id/*" //PROTECTED
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
