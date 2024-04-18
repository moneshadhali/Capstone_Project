import "../styles/delivery-jobs.css";

const DeliveryHistory = ({ orderHistory }) => {
  const history = orderHistory.map((order, index) => {
    return (
      <div className="history-listing" key={index}>
        <p>
          <span className="bold-text">Order Ref.</span> {order.id}
        </p>
        <p>
          <span className="bold-text">Postcode:</span>
          {order.postcode}
        </p>
        <p>
          <span className="bold-text">Address:</span> {order.address}
        </p>
      </div>
    );
  });

  return (
    <>
      <h2>Delivery History</h2>
      <div className="history">
        <div className="">{history}</div>
      </div>
    </>
  );
};

export default DeliveryHistory;
