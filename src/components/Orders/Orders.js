import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderDetails from "../OrderDetails/OrderDetails";
import ProgressBar from "../ProgressBar/ProgressBar";

const Orders = () => {
  document.title = "Orders";
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`https://green-safe.herokuapp.com/getOrder`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, []);

  const userStyle={
      backgroundColor:"#abffe6",
      padding:'20px',
      width:"55%",
      margin:"10px auto",
      borderRadius:"10px"
  }
  return (
    <div className="mt-5">
      <div style={userStyle}>
        <h1>
          Hi...! {loggedInUser.name || loggedInUser.displayName} Have A Nice Day
        </h1>
        <p>{loggedInUser.email}</p>
        <h4>You Have Already Purchase Total {order.length} Order</h4>
      </div>

      {order.length === 0 && <ProgressBar></ProgressBar>}

      <div className="row">
        {order.map((user) => (
          <OrderDetails key={user.id} user={user}></OrderDetails>
        ))}
      </div>
    </div>
  );
};

export default Orders;
