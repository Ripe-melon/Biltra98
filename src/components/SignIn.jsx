import { Button, Field, Message } from "../ui";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      navigate(location.state ? location.state.from : "/", { replace: true });
    }
  }, [auth.user]);

  const onChange = (e) => {
    setCreds((prevCreds) => ({
      ...prevCreds,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.signIn(creds.email, creds.password);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <Field labelText="Email">
          <input
            type="email"
            value={creds.email}
            onChange={onChange}
            name="email"
            id="email"
          />
        </Field>
        <Field labelText="Password">
          <input
            type="password"
            value={creds.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </Field>
        <Button type="submit" loading={loading}>
          Sign In
        </Button>
        <Message error={error} type="error" />
      </form>
    </div>
  );
}

export default SignIn;
