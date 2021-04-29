import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import "./AddProduct.css";
const AddProduct = () => {
  document.title= "AddProduct";
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      trName: data.trName,
      trAuthor: data.trAuthor,
      trPrice: data.trPrice,
      imageURL: imageURL,
    };

    const url = `https://green-safe.herokuapp.com/addTree`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        alert("Product Added Successfully");
      }
    });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "21adf6a0e24d545db2ae5320e523a594");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="add-container">
        <h3>Add Your Own Product</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="trName" placeholder="Tree Name" ref={register} />
          <br />
          <input name="trAuthor" placeholder="Author Name" ref={register} />
          <br />
          <input name="trPrice" placeholder="Price" ref={register} />
          <br />
          <input name="file" type="file" onChange={handleImageUpload} />
          <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
