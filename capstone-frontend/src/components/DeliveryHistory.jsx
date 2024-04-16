import "../styles/delivery-jobs.css";

const DeliveryHistory = ({ orderHistory }) => {
  const history = orderHistory.map((order, index) => {
    return (
      <div key={index}>
        <p>{order.postcode}</p>
        <p>{order.address}</p>
        <p>{order.customerName}</p>
      </div>
    );
  });

  return (
    <>
      <h3 className="delivery-h3">Delivery History</h3>
      <div className="">{history}</div>
    </>
  );
};

export default DeliveryHistory;
