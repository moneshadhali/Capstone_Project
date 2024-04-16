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
    <div className="login-container">
      <div className="login-child">
      <p>Login</p>
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

          <input type="submit" value="Log in" />
        </form>
        </div>
      </div>
  );
};

export default Login;
