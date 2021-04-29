import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import bg from './img/bird.jpg';
const Home = () => {
  document.title = "Home";

  const [trees, setTrees] = useState([]);
  const url = `https://green-safe.herokuapp.com/trees`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrees(data);
      });
  }, []);
  const bgStyle={
    backgroundImage:`url(${bg})`,
    backgroundSize:'cover',
    backgroundRepeat:"no-repeat"
  }
  return (
    <div style={bgStyle}>
      <div className="row p-5">
        <div className="m-auto">
          {trees.length === 0 && <ProgressBar></ProgressBar>}
        </div>
        {trees.map((tree) => (
          <Cart key={tree._id} tree={tree}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
