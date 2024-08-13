import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  
  // console.log(user);
  const navigate=useNavigate()

  const handleClick = async (e) => {
    if(user){
      localStorage.removeItem("user");
      navigate("/")
      window.location.reload() 
    }else{
      console.log("user not found")
    }
  
  };


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HotelBooking</span>
        </Link>
        {user ? (
          <div>{user.username}
            <button className="navButton" onClick={handleClick}>Logout</button>
          </div>) 
          : ( //if user then show username in place of register and login button
          <div className="navItems">
            <Link to="/register">
            <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;