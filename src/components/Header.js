import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css"
const Header=()=> {
    const[activeTab, setActiveTab] = useState("Home")
    return (
        <div className='header'>
            <p className='logo'>Logo</p>
            <div className='header-right'>
                <Link to='/'>
                    <p className={`${activeTab === "Home"}` ? "active" : ""}
                    onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
                <Link to='/add'>
                    <p className={`${activeTab === "Edit"}` ? "active" : ""}
                    onClick={() => setActiveTab("Edit")}>
                        Edit
                    </p>
                </Link>
                <Link to='/update/:id'>
                    <p className={`${activeTab === "Edit"}` ? "active" : ""}
                    onClick={() => setActiveTab("Edit")}>
                        Edit
                    </p>
                </Link>
                <Link to='/view/:id'>
                    <p className={`${activeTab === "View"}` ? "active" : ""}
                    onClick={() => setActiveTab("View")}>
                        View
                    </p>
                </Link>
                <Link to='/about'>
                    <p className={`${activeTab === "About"}` ? "active" : ""}
                    onClick={() => setActiveTab("About")}>
                        About
                    </p>
                </Link>

            </div>
        </div>
    )
}

export default Header;