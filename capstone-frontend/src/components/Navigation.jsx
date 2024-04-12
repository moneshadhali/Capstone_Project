import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link to ="/profile">Profile</Link></li>
                <li><Link to ="/all-deliveries">All Deliveries</Link></li>
                <li><Link to ="/my-deliveries">My Deliveries</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
     );
}
 
export default Navigation;