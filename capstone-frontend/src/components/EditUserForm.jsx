import { useState } from "react"


const EditUserForm = (userProfile) => {
    const [newName, setNewName] = useState(null);

    const handleNameChange = (e) =>{
        setNewName(e.target.value)
    }

    const handleFormSubmit = async (e) =>{
        e.preventDefault()
    }

    return ( 
        <>
        <form onSubmit={handleFormSubmit}>
            <label>
                New Name: 
                <input
                type="text"
                value="newName"
                onChange={handleNameChange}
                />
            </label>
            <button type="submit"> Submit </ button>
        </form>
        
        </> 
        
    );
}
 
export default EditUserForm;