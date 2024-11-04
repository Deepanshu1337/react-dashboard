import React from "react";
import "./Dashboard.styles.css";
import { Button } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <div className="right-container">
        <div className="welcome-container mb-4">
          <div className="row">
            <div className="col-md-8">
              <div className="welcome-content">
                <h1>Welcome to Aistaff </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis suscipit autem qui assumenda at aperiam sunt,
                  nesciunt inventore iste earum laudantium quo iusto, minus
                  reprehenderit nostrum molestias. Alias molestias architecto
                  veniam quam ipsam, provident sint laudantium rem autem id
                  corporis asperiores voluptatum, voluptas illum, saepe et hic
                  fuga facilis praesentium.
                </p>
                <Button>View more</Button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="assist-container">
                <div className="assist-content">
                  <h3>How we can Assist You?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis suscipit autem qui assumenda at aperiam sunt,
                    nesciunt inventore iste etium.
                  </p>
                  <Button>View more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quick-links-container row mx-auto mb-4 ">
          <div className=" col-12 row border-2 border-white mx-auto">
            <div className="col-3 quick-links">
              <div className="links">quick links</div>
            </div>
            <div className="col-3 quick-links">
              <div className="links">quick links</div>
            </div>
            <div className="col-3 quick-links">
              <div className="links">quick links</div>
            </div>
            <div className="col-3 quick-links">
              <div className="links">quick links</div>
            </div>
          </div>
        </div>

        <div className="introduction-container">
          <div className="row p-4">
            <div className="col-md-8">
              <div className="introduction-content">
                <h1>welcome to demo video</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="count-container">
                <div className="leads-count">
                  <h1>0</h1>
                  <p>Leads</p>
                </div>
                <div className="chatbot-count">
                  <h1>0</h1>
                  <p>Chatbots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
