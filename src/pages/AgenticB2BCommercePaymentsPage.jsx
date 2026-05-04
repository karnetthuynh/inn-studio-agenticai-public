import React, { useRef } from "react";
import { Content, Button } from "@carbon/react";
import { Restart, Home, CaretLeft, CaretRight } from "@carbon/icons-react";
import { NavLink, useLocation } from "react-router";
import { demos } from "../App";

function AgenticB2BCommercePaymentsPage() {
  const iframeRef = useRef(null);

  const resetIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://demo-now.techzone.ibm.com/psl/g7h0lmj?g=cmg5op1am000404jvdp79h1e8&s=0";
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
            src="/ibm-wxo.svg"
            style={{
              width: "6rem",
              height: "6rem",
              marginBottom: "2rem",
              // marginTop: "100px",
            }}
          />

          {/* header */}
          <div id="demo-text">
            <h1
              id="intro"
              style={{
                fontSize: "4rem",
                marginBottom: "4rem",
              }}
            >
              Agentic B2B Commerce and Payments
            </h1>
            {/* caption */}
            <div className="caption">
              <h1
                style={{
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                }}
              >
                Learn about watsonx Orchestrate's orchestrator engine, the
                flexibility of pre-built catalog agents, and agentic AI's
                potential to enable efficient, transparent, and intelligent
                commerce.
              </h1>
            </div>
          </div>
        </div>
        {/* laptop frame */}
        <div id="laptop-border">
          <div id="laptop">
            <div id="page-content">
              <iframe
                ref={iframeRef}
                src="https://demo-now.techzone.ibm.com/psl/g7h0lmj"
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
        </div>{" "}
        {/* end buttons */}
        {/* container for the footer with logo */}
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
            src="gmf-logo.svg"
            style={{
              height: "3rem",
              width: "auto",
              marginLeft: "2rem",
            }}
          />
        </div>
      </Content>
    </>
  );
}

export default AgenticB2BCommercePaymentsPage;
