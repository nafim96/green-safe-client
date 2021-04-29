import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaStripeS } from "react-icons/fa";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import './CheckOut.css';

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [tree, setTree] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://green-safe.herokuapp.com/checkOut/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setTree(result);
      });
  }, [id]);

  const { trName, trAuthor, trPrice, _id,imageURL } = tree;
  const handleCheckOut = () => {
    const orderDetails = {
      ...loggedInUser,
      trName: trName,
      trPrice: trPrice,
      trAuthor: trAuthor,
      id: _id,
      img:imageURL,
      orderTime: new Date(),
    };

    fetch("https://green-safe.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Ordered Successfully Check Out");
        }
      });
  };

  return (
    <div className="check-container">
      <h1>Check Out</h1>
      <div className="check-header">
        <div className="row d-flex">
          <h2 className="col-md-4">Description</h2>
          <h2 className="col-md-4">Author</h2>
          <h2 className="col-md-4">Price</h2>
        </div>
      </div>
      <div className="check-value">
        <div className="row d-flex">
          <p className="col-md-4">{trName}</p>
          <p className="col-md-4">{trAuthor}</p>
          <p className="col-md-4">{trPrice}</p>
        </div>
      </div>
      <div className="check-total">
        <div className="row d-flex">
          <p className="col-md-4">Total</p>
          <p className="col-md-4"></p>
          <p className="col-md-4">{trPrice}</p>
        </div>
      </div>
      <Button variant="success" onClick={handleCheckOut}>
        <FaStripeS /> Check Out
      </Button>
    </div>
  );
};

export default CheckOut;
