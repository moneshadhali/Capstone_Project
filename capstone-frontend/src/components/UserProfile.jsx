import { Link } from "react-router-dom";
import "../styles/profile.css";

const UserProfile = ({ userProfile }) => {
  if (userProfile) {
    return ( 
      <>
        <section className="profile">
          <div className="profile-details">
            <h1>Profile</h1>
            <img src="images/profile1.jpg" alt="profile picture" ></img>
            <div className="name">
              <p>
                <span>Name:</span> {userProfile.name}</p>
            </div>
            <div className="region">
              <p>
                <span>Region:</span> {userProfile.region}</p>
            </div>
            <div className="location">
              <p>
                <span>Warehouse Location: </span> {userProfile.warehouse.location},{" "}
                {userProfile.warehouse.name}
              </p>
            </div>

              <button className="edit-btn">
                <Link to={`/profile/${userProfile.id}/edit`}>Edit</Link>
              </button>

          </div>
        </section>
      </>
    );
  } else {
    return <></>;
  }
};

export default UserProfile;
