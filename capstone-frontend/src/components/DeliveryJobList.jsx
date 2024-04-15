import DeliveryJob from "./DeliveryJob";

const DeliveryJobList = ({ jobs, updateBtn }) => {
  const jobComponents = jobs.map((job) => {
    return (
      <DeliveryJob
        key={job.id}
        job={job}
        updateBtn={updateBtn}
      />
    );
  });

  return (
    <>
      <h3>Available Jobs</h3>
      <div>{jobComponents}</div>
    </>
  );
};

export default DeliveryJobList;
