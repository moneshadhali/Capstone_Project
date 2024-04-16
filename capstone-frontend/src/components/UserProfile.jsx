import { Link } from "react-router-dom";
import "../styles/user-profile.css";

const UserProfile = ({ userProfile }) => {
  if (userProfile) {
    return (
      <>
      <div className="profile">
        <h1>Profile</h1>
        <p>Name: {userProfile.name}</p>
        <p>Region: {userProfile.region}</p>
        <p>
          Warehouse Location: {userProfile.warehouse.location},{" "}
          {userProfile.warehouse.name}
        </p>

        <button>
          <Link to={`/profile/${userProfile.id}/edit`}>Edit</Link>
        </button>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default UserProfile;
