import React from "react";
import "./footer.scss";

let currentYear=new Date().getFullYear();

function Footer(){
    return (
        // {currentYear}
        <div className="footer">
        <h3>Copyright @{currentYear}</h3>
        </div>
    );
}

export default Footer;