import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import "./ManageDetails.css";

const ManageDetails = (props) => {
  document.title='ManageProduct';
  const trees = props.trees;
  const { trName, trAuthor, trPrice, _id } = trees;

  const handleDeleteProduct = (id) => {
    fetch(`https://green-safe.herokuapp.com/deleteTree/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Product Delete Successfully");
        }
      });
  };

  return (
    <div className="manage-container">
      <table>
        <thead>
          <tr>
            <th>Tree Name</th>
            <th>Tree Author</th>
            <th>Tree Price</th>
          </tr>
        </thead>
        <tbody className="manage-container">
          <tr>
            <td>{trName}</td>
            <td>{trAuthor}</td>
            <td>{trPrice}</td>
            <td>
              <button>
                <MdEdit />
              </button>
              <button onClick={() => handleDeleteProduct(_id)}>
                <MdDeleteForever />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageDetails;
