import React, { useRef } from "react";
import { Content, Button } from "@carbon/react";
import { Restart, Home, CaretLeft, CaretRight } from "@carbon/icons-react";
import { NavLink, useLocation } from "react-router";
import { demos } from "../App";

function ClientZeroPage() {
  const iframeRef = useRef(null);

  {
    /* function to reset the iframe to the start of the demo */
  }
  const resetIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://demo-now.techzone.ibm.com/psl/7m63012x?g=cmnjc5vwx000v04l7b2n8es56&s=0";
    }
  };

  const location = useLocation();

  const currentIndex = demos.findIndex(
    (demo) => demo.path === location.pathname,
  );

  const current = currentIndex + 1;
  const total = demos.length;

  return (
    <>
      <Content id="demo-content">
        <div className="header">
          {/* icon above header */}
          <img
            src={`${import.meta.env.BASE_URL}ibm-wxo.svg`}
            style={{
              height: "6rem",
              marginBottom: "2rem",
            }}
          />

          <div id="demo-text">
            {/* header */}
            <div style={{ display: "flex", color: "#0f62fe" }}>
              <h1
                id="intro"
                style={{
                  fontSize: "4rem",
                  marginBottom: "2.5rem",
                  marginRight: "1rem",
                  color: "#0f62fe",
                }}
              >
                IBM as
              </h1>
              <h1
                style={{
                  fontFamily: "IBM Plex Serif",
                  fontStyle: "italic",
                  // fontWeight: "400",
                  fontSize: "4rem",
                  marginRight: "18px",
                  color: "#0f62fe",
                }}
              >
                Client Zero
              </h1>
            </div>

            {/* demo description */}
            <div className="caption">
              <h1
                style={{
                  fontStyle: "italic",
                  fontSize: "1.75rem",
                }}
              >
                <strong>AskIBM</strong>, an orchestrator agent, helps employees
                handle HR or IT needs without directly using systems like SAP,
                Workday, or ServiceNow. <br />
                <br />
                Through an intuitive interface, queries are routed to
                specialized AI teammates—<strong>AskHR</strong> for payslips or
                PTO, <strong>AskSales</strong> for client outreach, and{" "}
                <strong>AskIT</strong> for support—delivering secure,
                personalized responses via RAG and backend tools. <br />
                <br />
                Employees stay in control with human-in-the-loop approvals and
                feedback.
              </h1>
            </div>
          </div>
        </div>
        {/* the laptop frame to embed your demo link into */}
        <div id="laptop-border">
          <div id="laptop">
            <div id="page-content">
              <iframe
                ref={iframeRef}
                src="https://demo-now.techzone.ibm.com/psl/7m63012x?g=cmnjc5vwx000v04l7b2n8es56&s=0"
                style={{ zoom: "58%" }}
              />
            </div>
          </div>
        </div>
        <div id="laptop-bottom"></div>
        {/* optional restart button */}
        {/* buttons */}
        <div
          style={{ display: "flex", marginLeft: "0px", marginBottom: "4rem" }}
        >
          <div id="nav-buttons" style={{ flex: "2" }}>
            <Button
              className="my-button"
              hasIconOnly
              onClick={resetIframe}
              renderIcon={Restart}
              size={"xl"}
            />
            <Button
              className="my-button"
              hasIconOnly
              href="#"
              as={NavLink}
              to="/"
              renderIcon={Home}
              size={"xl"}
              style={{ marginLeft: "2rem" }}
            />
          </div>
          <div className="carousel-buttons">
            <Button
              className="my-button"
              hasIconOnly
              href="#"
              as={NavLink}
              // to="/saferpayments"
              to={demos[currentIndex - 1]?.path || demos[total - 1].path}
              renderIcon={CaretLeft}
              size={"xl"}
            />
            <span className="carousel-tracker">
              {current}/{total}
            </span>
            <Button
              className="my-button"
              hasIconOnly
              href="#"
              as={NavLink}
              // to="/smartbranch"
              to={demos[currentIndex + 1]?.path || demos[0].path}
              renderIcon={CaretRight}
              size={"xl"}
            />
          </div>
        </div>{" "}
        {/* end buttons */}
        {/* container for the footer with logo */}
        <div id="footer">
          <img
            src={`${import.meta.env.BASE_URL}IBM_logo_black.svg`}
            style={{
              width: "auto",
              height: "3rem",
              marginRight: "2rem",
            }}
          />
          <div
            id="line"
            style={{
              height: "4rem",
              width: "1px",
              backgroundColor: "black",
            }}
          ></div>
          <img
            src={`${import.meta.env.BASE_URL}EETeamLogo.svg`}
            style={{
              height: "4rem",
              width: "auto",
              marginLeft: "2rem",
            }}
          />
        </div>{" "}
        {/* end footer */}
      </Content>
    </>
  );
}

export default ClientZeroPage;
