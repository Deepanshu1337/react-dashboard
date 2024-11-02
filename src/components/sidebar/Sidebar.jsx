import React from "react";
import "./Sidebar.styles.css";

import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Button className="w-100">
            <span className="icon"></span>
            Dashboard
            <span className="arrow"></span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
