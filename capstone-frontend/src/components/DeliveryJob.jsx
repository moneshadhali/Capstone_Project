import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/delivery-jobs.css";
import PackageListPopup from "./PackageListPopUp";

const DeliveryJob = ({ job, updateBtn, btnMessage }) => {
  const [showPackages, setShowPackages] = useState(false);

  const navigate = useNavigate();

  const handleUpdateButton = () => {
    updateBtn(job.id);
    navigate("/my-deliveries");
  };

  if (job) {
    return (
      <section className="job-listing">
        <div className="job-details">
          <p>
            <span>Recipient: </span> {job.customerName}
          </p>
          <p>Address: {job.address}</p>
          <p>Postcode: {job.postcode}</p>

          <button className="view-packages-btn" onClick={() => setShowPackages(true)}>View Packages</button>
          {showPackages && (
            <PackageListPopup
              job={job}
              onClose={() => setShowPackages(false)}
            />
          )}

          <button className="accept-btn" onClick={handleUpdateButton}>
            {btnMessage}
          </button>
        </div>
        <div className="map">
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              job.address
            )}&z=15&output=embed`}
          ></iframe>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default DeliveryJob;
