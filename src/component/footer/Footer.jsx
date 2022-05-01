import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div>
        <h1 className="footer-title">Mobiphone</h1>
        <address className="address">1/4, Dhaka, Bangladesh</address>
        <p className="email">
          <span>
            Email:<i>mobiphone@gmail.com</i>
          </span>
        </p>
        
      </div>
      <div>
      <h4 className="footer-social">Contact with us</h4>
        <BsFacebook className="social-icon"></BsFacebook>
        <BsInstagram className="social-icon"></BsInstagram>
        <BsTwitter className="social-icon"></BsTwitter>
        <BsYoutube className="social-icon"></BsYoutube>
      </div>
      <div className="my-auto copyright">
        <p> CopyRights © {year} </p>
      </div>
    </footer>
  );
};

export default Footer;
