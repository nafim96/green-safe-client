import React from "react";
import "./OrderDetails.css";
const OrderDetails = (props) => {
  const user = props.user;
  const { trName, orderTime, img, trPrice } = user;

  const timeStyle = {
    backgroundColor: "#abffe6",
    width: "70%",
    borderRadius: "10px",
    margin: "auto",
  };
  
  return (
    <div className="col-md-3 order-style">
      <img src={img} alt="" className="w-75" />
      <h4>{trName}</h4>
      <p>${trPrice}</p>
      <p style={timeStyle}>{orderTime}</p>
    </div>
  );
};

export default OrderDetails;
