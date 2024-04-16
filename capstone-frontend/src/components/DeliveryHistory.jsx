import "../styles/delivery-jobs.css";

const DeliveryHistory = ({ orderHistory }) => {
  const history = orderHistory.map((order, index) => {
    return (
      <div className="history-listing" key={index}>
        <p>Order Ref. {order.id}</p>
        <p>Post Code: {order.postcode}</p>
        <p>Address: {order.address}</p>
      </div>
    );
  });

  return (
    <>
      <h3 className="delivery-h3">Delivery History</h3>
      <div className="history">
        <div className="">{history}</div>
      </div>
    </>
  );
};

export default DeliveryHistory;
