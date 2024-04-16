import { useNavigate } from "react-router-dom";
import "../styles/delivery-jobs.css";

const DeliveryJob = ({ job, updateBtn, btnMessage }) => {
  const navigate = useNavigate();

  const handleUpdateButton = () => {
    updateBtn(job.id);
    navigate("/my-deliveries");
  };

  return (
    <section className="job-listing">
      <div className="job-details">
        <p>{job.address}</p>
        <p>{job.postcode}</p>
        <p>
          <span>Volume: </span> {job.volume} cm<span className="volume">3</span>
        </p>
        <p>
          <span>Recipient: </span>
          {job.customerName}
        </p>
        <button className="accept-btn" onClick={handleUpdateButton}>
          {btnMessage}
        </button>
      </div>
    </section>
  );
};

export default DeliveryJob;
