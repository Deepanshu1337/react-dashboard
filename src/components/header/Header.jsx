import React from "react";
import "./Header.style.css";
import { Link } from "react-router-dom";
import SmallLogo from "../../assests/images/logo-dark.png";
import { Button } from "@mui/material";
import { MdOutlineMenuOpen } from "react-icons/md";

const Header = () => {
  return (
    <Header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
          <div className="col-12 d-flex align-items-center">
            {/* logo wrapper */}
            <div className="col-sm-2 part1">
              <Link to="/" className="logo d-flex align-items-center">
                {" "}
                <img src={SmallLogo} alt="Logo" />
              </Link>
            </div>

            <div className="col-sm-3 col-lg-1 d-flex align-items-center part2">
              <Button className="rounded-circle">
                <MdOutlineMenuOpen />
              </Button>
            </div>

            <div className="col-sm-3 header-description part4">
              <h4 className="mb-0 mt-2 header-title">Hello Chat bots</h4>
              <p className="mb-0">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="col-sm-6 col-lg-6 d-flex align-items-center justify-content-end part2">
              <Button className="rounded-circle">
                <MdOutlineMenuOpen />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Header;
