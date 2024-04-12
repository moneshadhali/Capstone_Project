
const UserProfile = ({userProfile}) => {
    return ( 
        <>
            <h1>Profile</h1>
            <p>{userProfile.name}</p>
            <p>{userProfile.region}</p>
        </> 
    );
}
 
export default UserProfile;