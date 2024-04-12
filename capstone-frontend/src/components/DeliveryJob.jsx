const DeliveryJob = ({job}) => {
    return ( 
        <>
            <div>
                <p>{job.postcode}</p>
                <p>{job.address}</p>
                <p>{job.isAccepted}</p>
                <p>{job.isDelivered}</p>
                <p>{job.customerName}</p>
                <p>{job.volume}</p>
            </div>
        </> 
    );
}
 
export default DeliveryJob;