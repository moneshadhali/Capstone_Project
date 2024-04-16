import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/edit-profile.css";


const EditUserForm = ({ userProfile, updateUser }) => {
    const [name, setName] = useState(userProfile.name);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
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
                <h1 className="title">Edit Profile</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="newname">Please enter your new name:</label>
                    <input
                        id="newname"
                        type="text"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="btn"
                        type="submit"
                        value="Submit" />
                </form>
                <button className="btn" onClick={() => navigate("/profile")}>Back To Profile</button>
            </section>
        </>
    );
}

export default EditUserForm;