import "../styles/delivery-jobs.css";

const DeliveryHistory = ({ orderHistory }) => {
  const history = orderHistory.map((order, index) => {
    return (
      <div className="history-listing" key={index}>
        <p>
          <span className="bold-text">Order Ref.</span> {order.id}
        </p>
        <p className="grid-start-1">
          <span className="bold-text">Post Code:</span>
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
      <h3 className="delivery-h3">Delivery History</h3>
      <div className="history">
        <div className="">{history}</div>
      </div>
    </>
  );
};

export default DeliveryHistory;
