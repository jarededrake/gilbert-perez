import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { InstagramFilled } from "antd";
import Icon from "@mdi/react";
import { mdiInstagram, mdiFacebook } from "@mdi/js";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className='Footer'>
      <hr />
      <div class='container'>
        <div className='social-media-links'>
          <div className='instagram'>
            <Icon path={mdiInstagram} title='User Profile' size={2} />
          </div>
          <div className='facebook'>
            <Icon path={mdiFacebook} title='User Profile' size={2} />
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
};
export default Footer;
