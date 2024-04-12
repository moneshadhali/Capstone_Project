import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";

const DeliveryJobContainer = () => {

    const [userProfile, setUserProfile] = useState(null);

    const fetchUserProfile = async () =>{
        const response = await fetch ("http://localhost:8080/users/1");
        const data = await response.json();
        setUserProfile(data);  

    }

    const deliveryRoute = createBrowserRouter([
        {
            path: "/", 
            element: (<> <Navigation /></>), 
            children: [
                {
                    path: "/profile",
                    element: ( <> <UserProfile userProfile={userProfile} /></>)
                },
                {
                    path: "/profile/:id/edit",
                    element: ( <> <h1>Edit Profile</h1> </>)
                },
                {
                    path: "/all-deliveries",
                    element: ( <> <h1>All deliveries</h1></>)
                },
                {
                    path: "/my-deliveries",
                    element: ( <> <h1>My Deliveries</h1></>)
                },
                {
                    path: "/delivery-history",
                    element: ( <> <h1> Deliverie History</h1></>)
                },
                {
                    path: "/order-status",
                    element: ( <> <h1> Order Status </h1></>)
                }
            ]
        }
        
    ]);

    useEffect( () =>{
        fetchUserProfile();
        console.log(userProfile)
    }, [])

    return ( 
        <>
            <RouterProvider router={deliveryRoute} />
        </> 
    );
}
 
export default DeliveryJobContainer;