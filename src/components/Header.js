import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { Image } from "react-bootstrap";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="header">
      <div className="logo">
        <Image
          src={require("../image/splashscreen_logo.png")}
          alt="Logo"
          height="50px"
          width="60px"
        ></Image>
        <p className="text-logo">SPREZZA</p>
      </div>
      <div className="header-right">
        <Link
          to="/"
          className={activeTab === "Home" ? "active" : ""}
          onClick={() => setActiveTab("Home")}
        >
          HOME
        </Link>
        <Link
          to="/add"
          className={activeTab === "Edit" ? "active" : ""}
          onClick={() => setActiveTab("Edit")}
        >
          ADD
        </Link>

        <Link
          to="/view/:id"
          className={activeTab === "View" ? "active" : ""}
          onClick={() => setActiveTab("View")}
        >
          VIEW
        </Link>
        <Link
          to="/about"
          className={activeTab === "About" ? "active" : ""}
          onClick={() => setActiveTab("About")}
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Header;
