import DeliveryJob from "./DeliveryJob";

const DeliveryJobList = ({ userJobs }) => {
  const jobComponents = userJobs.map((job) => {
    return <DeliveryJob key={job.id} job={job} />;
  });

  return (
    <>
      <h3>Accepted Jobs</h3>
      <div>{jobComponents}</div>
    </>
  );
};

export default DeliveryJobList;
