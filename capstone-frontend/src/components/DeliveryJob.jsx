import { useNavigate } from "react-router-dom";

const DeliveryJob = ({ job, updateBtn }) => {
  const navigate = useNavigate();

  const handleUpdateButton = () => {
    updateBtn(job.id);
    navigate("/my-deliveries");
  };

  return (
    <>
      <div>
        <p>{job.postcode}</p>
        <p>{job.address}</p>
        <p>{job.isAccepted}</p>
        <p>{job.isDelivered}</p>
        <p>{job.customerName}</p>
        <p>{job.volume}</p>
      </div>
      <div>
        <button onClick={handleUpdateButton}>Update</button>
      </div>
    </>
  );
};

export default DeliveryJob;
