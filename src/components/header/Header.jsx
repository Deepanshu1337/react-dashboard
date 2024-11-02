import React, { useState } from "react";
import "./Header.style.css";
import { Link } from "react-router-dom";
import SmallLogo from "../../assests/images/logo-dark.png";

import { Button } from "@mui/material";

import { MdOutlineMenuOpen, MdLightMode } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="header d-flex align-items-center shadow-sm">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
          <div className="col-12 d-flex align-items-center">
            {/* logo wrapper */}
            <div className="col-sm-2 part1">
              <Link to="/" className="logo d-flex align-items-center">
                <img src={SmallLogo} alt="Logo" />
              </Link>
            </div>

            <div className="col-lg-1 d-flex align-items-center part2">
              <Button className="rounded-circle">
                <MdOutlineMenuOpen />
              </Button>
            </div>

            <div className="col-sm-3 header-description part4">
              <h4 className="mb-0 mt-2 header-title">Hello Chat bots</h4>
              <p className="mb-0">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="col-sm-6 col-lg-6 d-flex align-items-center justify-content-end part2">
              <Button className="rounded-circle mx-4">
                <MdLightMode />
              </Button>
              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center">
                  <div className="userImg d-flex align-content-center justify-content-center overflow-hidden ">
                    <div className="rounded-circle d-flex align-content-center justify-content-center">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt="User Image"
                      />
                    </div>
                  </div>

                  <div className="userInfo" onClick={handleProfileClick}>
                    <h4 className="mb-0">Deepanshu Dixit</h4>
                    <p className="mb-0 mt-0">@deepanshu1337</p>
                  </div>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleProfileClose}
                    onClick={handleProfileClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 2,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleProfileClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      profile
                    </MenuItem>
                    <MenuItem onClick={handleProfileClose}>
                      <ListItemIcon>
                        <FaShieldAlt />
                      </ListItemIcon>
                      Reset password
                    </MenuItem>
                    <MenuItem onClick={handleProfileClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
