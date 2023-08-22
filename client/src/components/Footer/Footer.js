import React from "react";
// import "./Footer.css";

const Footer = ({ toggle }) => {
    return (
        <div class="page-footer">
            <div class="page-footer-inner">
                {" "}
                2022 &copy; Rania & Ranim
                <a href="#" target="_top" class="makerCss">
                    Gomycode
                </a>
            </div>
            <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div>
        </div>
    );
};

export default Footer;
