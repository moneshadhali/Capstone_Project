import DeliveryJob from "./DeliveryJob";

const DeliveryJobList = ({ jobs, updateBtn, btnMessage }) => {
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
      <h3>Available Jobs</h3>
      <div>{jobComponents}</div>
    </section>
  );
};

export default DeliveryJobList;
