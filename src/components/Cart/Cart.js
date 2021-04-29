import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const tree = props.tree;
  const { trName, trPrice, imageURL, _id } = tree;

  const history = useHistory();
  const handleBuyTree = (id) => {
    history.push(`/checkOut/${id}`);
  };
  return (
    <div className="col-md-4 p-4">
      <Card>
        <Card.Img variant="top w-90" src={imageURL} />
        <Card.Body>
          <Card.Title>{trName}</Card.Title>
          <Card.Text>${trPrice}</Card.Text>
          <Link to={`/checkOut/${_id}`}>
            <Button variant="success" onClick={() => handleBuyTree(_id)}>
              <FaShoppingCart /> Buy Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
