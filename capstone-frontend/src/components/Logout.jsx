import { useNavigate } from "react-router-dom";


const Logout =  () => {
    const navigate = useNavigate();

    const handleLogout = () =>{
        navigate("http://localhost:8080")
    }

    return ( 
        <button onClick={handleLogout}> Logout </button>
     );
}
 
export default Logout;