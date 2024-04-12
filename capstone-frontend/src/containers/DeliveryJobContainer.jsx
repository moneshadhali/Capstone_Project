import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const DeliveryJobContainer = () => {
    const deliveryRoute = createBrowserRouter([
        {
            path: "/", 
            element: (<> <Navigation /></>), 
            children: [
                {
                    path: "/profile",
                    element: ( <> <h1>Profile</h1></>)
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
        
    ])

    return ( 
        <>
            <RouterProvider router={deliveryRoute} />
        </> 
    );
}
 
export default DeliveryJobContainer;