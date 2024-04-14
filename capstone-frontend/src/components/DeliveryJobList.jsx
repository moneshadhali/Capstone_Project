import DeliveryJob from "./DeliveryJob";

const DeliveryJobList = ({jobs}) => {
    const jobComponents = jobs.map((job) => {
        return(
            <DeliveryJob 
            key={job.id} 
            job={job}
            />
        )
    })

    return (  
        <>
            <h3>Available Jobs</h3>
            <div>
                {jobComponents}
            </div>
        </>
    );
}
 
export default DeliveryJobList;