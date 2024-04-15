const DeliveryHistory = ({ orderHistory }) => {
    const history = orderHistory.map((order, index) => {
        return (
            <div key={index}>
                <p>{order.postcode}</p>
                <p>{order.address}</p>
                <p>{order.customerName}</p>
            </div>
        );
    });

    return (
        <>
            {history}
        </>
    );
}

export default DeliveryHistory;