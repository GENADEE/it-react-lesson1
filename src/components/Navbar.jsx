import React from "react";

const Navbar = () => {
    return (
        <nav className = "nav">
            <div>
                <a href = "profile"> Profile </a>
            </div>
            <div>
                <a href = "messages"> Messages </a>
            </div>
            <div>
                <a href = "news"> News </a>
            </div>
            <div>
                <a href = "music"> Music </a>
            </div>
            <div>
                <a href = "settings"> Settings </a>
            </div>
        </nav>
    )
}

export default Navbar;

