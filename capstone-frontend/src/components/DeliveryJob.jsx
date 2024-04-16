import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/delivery-jobs.css";

const DeliveryJob = ({ job, updateBtn, btnMessage }) => {
  const navigate = useNavigate();

  const handleUpdateButton = () => {
    updateBtn(job.id);
    navigate("/my-deliveries");
  };


  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const packageList = job.packages.map((pack) => {
    return (
          <li>{pack.product_name}</li>
    )
  })

  if (job) {
    return (
      <section className="job-listing">
        <div className="job-details">
          <p><span>Recipient: </span> {job.customerName}</p>
          <p>Address: {job.address}</p>
          <p>Postcode: {job.postcode}</p>
          <p><span>Volume: </span> {job.volume} cm<span className="volume">3</span></p>
        </div>
        {/* <ul>Packages: {packageList}</ul> */}
        <button onClick={toggle}>View Packages</button>
        {open && ( 
          <div>
            {packageList}
          </div>
        )}
        <div className="map">
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(job.address)}&z=15&output=embed`}
          ></iframe>
        </div>
       <button className="accept-btn" onClick={handleUpdateButton}>
          {btnMessage}
        </button>
      </section>
    );
  } else {
    return <></>;
  }

};

export default DeliveryJob;
