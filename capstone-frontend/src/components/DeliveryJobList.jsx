import DeliveryJob from "./DeliveryJob";

const DeliveryJobList = ({ jobs, updateUserJobsStatus }) => {
  const jobComponents = jobs.map((job) => {
    return (
      <DeliveryJob
        key={job.id}
        job={job}
        updateUserJobsStatus={updateUserJobsStatus}
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
