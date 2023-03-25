import React from "react";
// import { useNavigate } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Route } from 'react-router-dom';


import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
// import MainPage from "./components/MainPage";

// import ImageUpload from "./components/imageUpload.";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  // let history=useNavigate();
  // history.push("/")
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
            // element={isLoggedIn === "true" ? <MainPage /> : <Login />}
            
          />
          {/* <Route
              exact
              path="/"
              render={() => {
                if (isLoggedIn === "true") {
                  window.location.href = "./public/index.html";
                  return null;
                } else {
                  return <Login />;
                }
              }}
            /> */}

          {/* <Route exact path="/" component={LoginPage} /> */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
