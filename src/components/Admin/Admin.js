
import React from "react";
import Header from "../Header/Header";
import bg from "./img/bg.jpg";

const Admin = () => {
  document.title = "Admin";

  const bgStyle={
    backgroundImage:`url(${bg})`,
    backgroundSize:'cover',
    backgroundRepeat:"no-repeat",
    height:'560px'
  }
  return (
    <div style={bgStyle}>
      <div>
        <Header></Header>
      </div>
      
    </div>
  );
};

export default Admin;
