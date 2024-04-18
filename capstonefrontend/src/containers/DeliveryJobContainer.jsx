import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import DeliveryJobList from "../components/DeliveryJobList";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import EditUserForm from "../components/EditUserForm";
import DeliveryHistory from "../components/DeliveryHistory";
import OrderStatus from "../components/OrderStatus";

const API_ROOT = "http://localhost:8080";

const DeliveryJobContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [userJobs, setUserJobs] = useState([]);
  const [custOrder, setCustOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

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

  const fetchCustomerOrder = async (orderId) => {
    const response = await fetch(`${API_ROOT}/orders/${orderId}`);
    const data = await response.json();
    setCustOrder(data);
  };

  const fetchOrderHistory = async () => {
    if (currentUser) {
      const response = await fetch(
        `${API_ROOT}/users/${currentUser}/deliveredOrders`
      );
      const data = await response.json();
      setOrderHistory(data);
    }
  };

  const updateUser = async (user) => {
    await fetch(`${API_ROOT}/users/${currentUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    await fetchUserProfile();
    await fetchUsers();
  };

  const updateUserJobsStatus = async (id) => {
    if (currentUser) {
      await fetch(`${API_ROOT}/users/${currentUser}/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setJobs(jobs.filter((job) => job.id !== id));
      setUserJobs([...userJobs, jobs.find((job) => job.id === id)]);
    }
  };

  const updateDeliveryStatus = async (orderId) => {
    const order = {
      delivered: true,
    };

    if (currentUser) {
      await fetch(`${API_ROOT}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      setUserJobs(userJobs.filter((userJob) => userJob.id !== orderId));
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

  useEffect(() => {
    fetchOrderHistory();
  }, [orderHistory, currentUser]);

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
            updateBtn={updateUserJobsStatus}
            btnMessage={"Accept"}
            title={"All Deliveries"}
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
            updateBtn={updateDeliveryStatus}
            // updateBtn={updateUserJobsStatus}
            btnMessage={"Deliver"}
            title={"My Deliveries"}
          />
        </>
      ),
    },
    {
      path: "/delivery-history",
      element: (
        <>
          <Navigation />
          <DeliveryHistory orderHistory={orderHistory} />
        </>
      ),
    },
    {
      path: "/order-status",
      element: (
        <>
          <OrderStatus order={custOrder} orderStatus={fetchCustomerOrder} />
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
