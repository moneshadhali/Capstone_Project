import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ users, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCurrentUser(event.target.value);
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/all-deliveries");
  };

  return (
    <>
      <header>
        <img className="company-logo" src="images/logo.png" alt="logo" />
      </header>

      <div className="login-container">
        <figure>
          <img className="bike" src="images/bike1.jpeg" alt="bike" />
        </figure>

        <div className="welcome">
          <h3 className="shot-put-title">Shot Put Delivery</h3>
        </div>

        <div className="login-child">
          <h4>Login</h4>
          <form onSubmit={handleLogin}>
            <select
              name="user"
              id="user"
              defaultValue="Select a user"
              onChange={handleChange}
            >
              <option disabled value="Select a user">
                Select a user
              </option>
              {userOptions}
            </select>
            <input type="submit" value="Log in" className="login-btn" />
          </form>
        </div>
      </div>
      <footer>
        <p>2024 Shot Put Delivery &#169;</p>
      </footer>
    </>
  );
};

export default Login;
