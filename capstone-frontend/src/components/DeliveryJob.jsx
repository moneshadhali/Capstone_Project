import { useNavigate } from "react-router-dom";

const DeliveryJob = ({ job, updateBtn, btnMessage }) => {
  const navigate = useNavigate();

  const handleUpdateButton = () => {
    updateBtn(job.id);
    navigate("/my-deliveries");
  };

  return (
    <section className="job">
      <div className="job-details">
        <p>{job.postcode}</p>
        <p>{job.address}</p>
        <p>{job.isAccepted}</p>
        <p>{job.isDelivered}</p>
        <p>{job.customerName}</p>
        <p>{job.volume}</p>
      </div>
      <div>
        <button onClick={handleUpdateButton}>{btnMessage}</button>
      </div>
    </section>
  );
};

export default DeliveryJob;
