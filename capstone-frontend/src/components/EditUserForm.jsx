import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/edit-profile.css";


const EditUserForm = ({userProfile, updateUser}) => {
    const [name, setName] = useState(userProfile.name);
    const navigate = useNavigate();

    // const handleNameChange = (e) =>{
    //     setName(e.target.value)
    // }

    const handleFormSubmit = async (e) =>{
        e.preventDefault()
        const updatedUser = {
            id: userProfile.id,
            name,
        }
        updateUser(updatedUser);
        navigate("/profile");
    }



    return ( 
        <>
        <section className="edit-name">
        <h3 className = "title">Edit Profile</h3>
        <div className="new-name">
        <form onSubmit={handleFormSubmit}>
            <label>
                <div className="new-name-title">
                <span> New Name: </span>
                </div>
                <input
                className="edit-bar"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            
            <input 
            className="name-edit-btn"
            type="submit" 
            value ="submit"/>
        </form>
        </div>
        </section>
        
        </> 
        
    );
}
 
export default EditUserForm;