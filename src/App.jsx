import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Boka from "./pages/Boka";
import AssignmentList from "./pages/AssignmentList";
import { ToasterProvider } from "./context/ToasterContext";
import AssignmentDetails from "./pages/AssignmentDetails";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./PrivateRoute";
import GlobalStyle from "./styling/GlobalStyle";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <ToasterProvider>
          <Layout>
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
                path="/boka" //PROTECTED
                element={
                  <PrivateRoute>
                    <Boka />
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
          </Layout>
        </ToasterProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
