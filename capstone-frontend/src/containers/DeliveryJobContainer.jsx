import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import DeliveryJobList from "../components/DeliveryJobList";
import UserDeliveryJobList from "../components/UserDeliveryJobList";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import EditUserForm from "../components/EditUserForm";

const API_ROOT = "http://localhost:8080";

const DeliveryJobContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [userJobs, setUserJobs] = useState([]);

  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const [currentUser, setCurrentUser] = useState(null);


  const fetchDeliveryJobs = async () => {
    const response = await fetch(`${API_ROOT}/orders/not-accepted`);
    const jsonData = await response.json();
    setJobs(jsonData);
  };

  const fetchUsers = async () => {
    const response = await fetch(`${API_ROOT}/users`);
    const jsonData = await response.json();
    setUsers(jsonData);
  };

  const fetchUserJobs = async (id) => {
    const response = await fetch(`${API_ROOT}/users/${id}/orders`);
    const jsonData = await response.json();
    setUserJobs(jsonData);
    console.log(jsonData);
  };

  const fetchUserProfile = async () => {
    const response = await fetch(`${API_ROOT}/users/${currentUser}`);
    const data = await response.json();
    setUserProfile(data);
  };


  const updateUser = async (user) => {
    await fetch(`${API_ROOT}/users/${currentUser}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    await fetchUserProfile();
    await fetchUsers();
}

  const updateUserJobsStatus = async (id) => {
    if (currentUser) {
      await fetch(`${API_ROOT}/users/${currentUser}/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
      });
      setJobs(jobs.filter((job) => job.id !== id));
      setUserJobs([...userJobs, jobs.find((job) => job.id === id)]);
    }
  };


  useEffect(() => {
    fetchDeliveryJobs();
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUserJobs(currentUser);
    fetchUserProfile(currentUser);
  }, [currentUser]);

  const deliveryRoute = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Login users={users} setCurrentUser={setCurrentUser} />
        </>
      ),
    },
    {
      path: "/profile/",
      element: (
        <>
          <Navigation />
          <UserProfile currentUser={currentUser} userProfile={userProfile} />
        </>
      ),
    },
    {
      path: "/profile/:id/edit",
      element: (
        <>
          <Navigation />
          <h1>Edit Profile</h1>
          <EditUserForm userProfile={userProfile} updateUser={updateUser} />

        </>
      ),
    },
    {
      path: "/all-deliveries",
      element: (
        <>
          <Navigation />
          <DeliveryJobList
            jobs={jobs}
            updateUserJobsStatus={updateUserJobsStatus}
          />
        </>
      ),
    },
    {
      path: "/my-deliveries",
      element: (
        <>
          <Navigation />
          <DeliveryJobList
            jobs={userJobs}
            updateUserJobsStatus={updateUserJobsStatus}
          />
        </>
      ),
    },
    {
      path: "/delivery-history",
      element: (
        <>
          <Navigation />
          <h1> Deliverie History</h1>
        </>
      ),
    },
    {
      path: "/order-status",
      element: (
        <>
          <Navigation />
          <h1> Order Status </h1>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={deliveryRoute} />
    </>
  );
};

export default DeliveryJobContainer;
