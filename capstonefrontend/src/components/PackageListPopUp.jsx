import "../styles/delivery-jobs.css";

const PackageListPopup = ({ job, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close" onClick={onClose}>
          <p>Close</p>
        </button>
        <ul>
          {job.packages.map((pack, index) => (
            <li key={index}>{pack.product_name}</li>
          ))}
        </ul>
        <br />
        <p>
          <span>Volume: </span> {job.volume} cm
          <span className="volume">3</span>
        </p>
      </div>
    </div>
  );
};

export default PackageListPopup;
