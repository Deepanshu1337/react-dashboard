import React, { useState } from "react";
import "./Sidebar.styles.css";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { IoHome } from "react-icons/io5";
import { FaBots } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { GiArmorUpgrade } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaAngleRight,} from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmenuOpen = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="sidebar">
      <ul className="title mb-0 pe-0">
        {[
          { icon: <IoHome />, label: "Home", submenu: ["Dashboard", "Company"] },
          { icon: <FaBots />, label: "All Intelligent Bots", submenu: ["AI Chatbots", "Leads", "Conversation", "Reports"] },
          { icon: <FaTools />, label: "AI Tools", submenu: ["AI Stock Hub", "AI Blog Writer", "AI Content Writer", "AI Article Rewriter"] },
          { icon: <GiArmorUpgrade />, label: "Tools Upgrades", submenu: ["AI Website Edition", "AI Traffic Edition", "AI Appointment Edition", "DFY Edition", "Agency Edition", "Reseller Edition", "Whitelabel Edition"] },
          { icon: <BiSupport />, label: "Supports and Extras", submenu: ["Open AI Settings", "Training Videos", "Support Desk", "Upgrade Page", "Logout"] },
        ].map((item, index) => (
          <li key={index}>
            <Button
              className={`w-100 text-start justify-content-start align-items-center text-capitalize ${activeTab === index ? "active" : ""}`}
              onClick={() => handleSubmenuOpen(index)}
            >
              <span className="icon d-flex align-items-center justify-content-center">
                {item.icon}
              </span>
              {item.label}
              <span className="arrow d-flex align-items-center justify-content-center">
                 <FaAngleRight />
              </span>
            </Button>
            <div className={`subMenu-wrapper ${activeTab === index ? "open" : "close"}`}>
              <div className="subMenu">
                <ul className="p-0">
                  {item.submenu.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      <Link to="#">{subitem}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>


      <div className="logout-wrapper">
        <div className="logout-box d-flex align-items-center justify-content-center">
        <Button variant="contained"><FiLogOut/> Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
