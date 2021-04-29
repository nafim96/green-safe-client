import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import EditProduct from "./components/EditProduct/EditProduct";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Orders from "./components/Orders/Orders";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Profile from "./components/Profile/Profile";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <MainHeader></MainHeader>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRouter path="/order">
              <Orders></Orders>
            </PrivateRouter>
            <PrivateRouter path="/admin">
              <Admin></Admin>
            </PrivateRouter>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRouter path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRouter>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/editProduct">
              <EditProduct></EditProduct>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
