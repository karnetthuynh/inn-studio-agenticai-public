import React, { useRef } from "react";
import { Content, Button } from "@carbon/react";
import { Restart, Home, CaretLeft, CaretRight } from "@carbon/icons-react";
import { NavLink, useLocation } from "react-router";
import { demos } from "../App";

function LoanAgentPage() {
  const iframeRef = useRef(null);

  {
    /* function to reset the iframe to the start of the demo */
  }
  const resetIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://demo-now.techzone.ibm.com/psl/eko05xf?g=cmkpo45x6008x04l14esk28x8&s=0";
    }
  };

  // carousel tracker consts
  const location = useLocation();
  const currentIndex = demos.findIndex(
    (demo) => demo.path === location.pathname
  );
  const current = currentIndex + 1;
  const total = demos.length;

  return (
    <>
      <Content id="demo-content">
        <div className="header">
          {/* icon above header*/}
          <img
            src="ibm-wxo.svg"
            style={{
              width: "6rem",
              height: "6rem",
              marginBottom: "2rem",
            }}
          />

          <div id="demo-text">
            {/* Demo Title */}
            <h1
              id="intro"
              style={{
                fontSize: "4rem",
                marginBottom: "4rem",
              }}
            >
              Loan Approval
            </h1>
            {/* Demo Description */}
            <div className="caption">
              <h1
                style={{
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                }}
              >
                Powered by IBM Decision Intelligence, this AI agent combines
                advanced reasoning with deterministic decision-making to ensure
                consistent, trusted outcomes. The result is a smarter, more
                reliable workflow where approvals, rejections, and fraud checks
                are never left to chance.
              </h1>
              {/* 
          // Any small additional instructions can be put in this smaller header

          <h4
            style={{
              fontStyle: "italic",
              color: "#0f62fe",
              marginBottom: "94px",
              fontSize: "28px",
            }}
          >
            *click on the flashing dot or highlighted area to continue through
            the demo
          </h4> */}
            </div>
          </div>
        </div>
        {/* the laptop frame to embed your demo link into */}
        <div id="laptop-border">
          <div id="laptop">
            <div id="page-content">
              <iframe
                ref={iframeRef}
                src="https://demo-now.techzone.ibm.com/psl/eko05xf"
              />
            </div>
          </div>
        </div>
        <div id="laptop-bottom"></div>
        {/* buttons */}
        <div style={{ display: "flex", marginLeft: "0px" }}>
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
              to={demos[currentIndex + 1]?.path || demos[0].path}
              renderIcon={CaretRight}
              size={"xl"}
            />
          </div>
        </div>
        {/* end buttons */}
        {/* footer with logos */}
        <div id="footer">
          <img
            src="IBM_logo_black.svg"
            style={{
              width: "115px",
              height: "3rem",
              marginRight: "2rem",
            }}
          />
          <div
            id="line"
            style={{
              height: "3rem",
              width: "1px",
              backgroundColor: "black",
            }}
          ></div>
          <img
            src="FIS_logo.svg"
            style={{
              width: "115px",
              height: "3rem",
              marginLeft: "2rem",
            }}
          />
        </div>{" "}
        {/* end footer */}
      </Content>
    </>
  );
}

export default LoanAgentPage;
