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
    <section className="job-list">
      <h3 className="delivery-h3">{title}</h3>
      <div className="job-components">{jobComponents}</div>
    </section>
  );
};

export default DeliveryJobList;
