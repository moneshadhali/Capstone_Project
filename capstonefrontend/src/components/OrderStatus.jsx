import { useState } from "react";
import "../styles/profile.css";

const OrderStatus = ({ order, orderStatus }) => {
  const [orderId, setOrderId] = useState(0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    orderStatus(orderId);
  };

  return (
    <>
      <header>
        <img className="company-logo" src="images/logo.png" alt="logo" />
      </header>

      <div className="profile-details">
        <h1>Order Status</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="orderId">Please enter your order Id:</label>

          <input
            id="orderId"
            type="number"
            value={orderId}
            name="orderId"
            onChange={(e) => setOrderId(e.target.value)}
          />

          <input className="btn" type="submit" value="submit" />
        </form>

        {order && (
          <div className="order-info">
            <h4>Your Order Status</h4>
            <p>Order Id: {order.id}</p>
            <p>Package on the way: {order.accepted ? "True" : "False"}</p>
            <p>Delivered: {order.delivered ? "True" : "False"}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderStatus;
