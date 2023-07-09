import { useAuth } from "../../context/authContext";
import { Divider, Button } from "../../ui";
import { Link } from "react-router-dom";

function Header() {
  const auth = useAuth();

  return (
    <div>
      <h1>
        <Link to="/">BOKNINGSSYSTEM för BILTRANSPORTER</Link>
      </h1>
      {auth.user ? (
        <div>
          {`Welcome, ${auth.user.email}`} /
          <Button onClick={async () => await auth.signOut()}>Sign Out</Button>
        </div>
      ) : (
        <Link to="/signin">SignIn</Link>
      )}
      <Divider />
    </div>
  );
}

export default Header;
