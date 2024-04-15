import { useState } from "react"
import { useNavigate } from "react-router-dom";


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
        <form onSubmit={handleFormSubmit}>
            <label>
                New Name: 
                <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input 
            type="submit" 
            value ="submit"/>
        </form>
        
        </> 
        
    );
}
 
export default EditUserForm;