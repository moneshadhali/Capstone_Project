import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

      <section className="job">
        <div className="job-details">
          <p>Customer: {job.customerName}</p>
          <p>Address: {job.address}</p>
          <p>Postcode: {job.postcode}</p>
          <p>Order Volume:{job.volume}</p>
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
        <div>
          <button onClick={handleUpdateButton}>{btnMessage}</button>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default DeliveryJob;
