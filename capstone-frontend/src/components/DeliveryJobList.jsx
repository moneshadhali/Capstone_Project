import DeliveryJob from "./DeliveryJob";
import "../styles/delivery-jobs.css";

const DeliveryJobList = ({ jobs, updateBtn, btnMessage, title }) => {
  const jobComponents = jobs.map((job) => {
    return (
      <DeliveryJob
        key={job.id}
        job={job}
        updateBtn={updateBtn}
        btnMessage={btnMessage}
      />
    );
  });

  return (
    <>
      <h2>{title}</h2>
      <div className="job-components">{jobComponents}</div>
    </>
  );
};

export default DeliveryJobList;
