import { useNavigate } from "react-router-dom";

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
      <p>Login</p>
      <div>
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
    </>
  );
};

export default Login;
