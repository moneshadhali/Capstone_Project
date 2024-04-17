import { useState } from "react";

const OrderStatus = ({order, orderStatus}) => {
    const [orderId, setOrderId] = useState(0);

    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        orderStatus(orderId);
    }

    return ( 
        <>
            <form onSubmit={handleFormSubmit}>
            <label htmlFor="orderId">Please enter your order Id:</label>

            <input
                id="orderId"
                type="number"
                value={orderId}
                name="orderId"
                onChange={(e) => setOrderId(e.target.value)}
            />
            
            <input 
            type="submit" 
            value ="submit"/>
            </form>

            {order && (
                <>
                    <h4>Your Order Status</h4>
                    <p>Order Id: {order.id}</p>
                    {/* <p>Customer Name: {order.customerName}</p> */}
                    <p>Package on the way: {order.accepted ? "True" : "False"}</p>
                    <p>Delivered: {order.delivered ? "True" : "False"}</p>
                </>
            )}
    
        </> 
    );
}
 
export default OrderStatus;