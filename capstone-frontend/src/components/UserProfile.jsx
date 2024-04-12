import { Link } from "react-router-dom";

const UserProfile = ({userProfile}) => {

    return ( 
        <>
            <h1>Profile</h1>
            <p>{userProfile.name}</p>
            <p>{userProfile.region}</p>
            {/* <p>{userProfile.warehouse}</p> */}
            {/* <p>{console.log(userProfile.warehouse.area)}</p> */}

            <button>
                <Link to={`/profile/${userProfile.id}/edit`}>Edit</Link>
            </button>
        </> 
    );
}
 
export default UserProfile;