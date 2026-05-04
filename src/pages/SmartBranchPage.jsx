import React, { useRef } from "react";
import { Content, Button } from "@carbon/react";
import { Restart, Home, CaretLeft, CaretRight } from "@carbon/icons-react";
import { NavLink, useLocation } from "react-router";
import { demos } from "../App";

function SmartBranchPage() {
  const iframeRef = useRef(null);

  {
    /* function to reset the iframe to the start of the demo */
  }
  const resetIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://ibm.navattic.com/BlueCloudQuickAssist?g=cmcz6hinr000004kz8cdnazol&s=0";
    }
  };

  // carousel tracker consts
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
          <img
            src={`${import.meta.env.BASE_URL}ibm-wxo.svg`}
            style={{
              width: "6rem",
              height: "6rem",
              marginBottom: "2rem",
            }}
          />
          <div id="demo-text">
            <h1
              id="intro"
              style={{
                fontSize: "4rem",
                marginBottom: "4rem",
              }}
            >
              Smart Branch: <em>Quick Assist</em>
            </h1>
            {/* caption */}
            <div className="caption">
              <h1
                style={{
                  fontStyle: "italic",
                  fontSize: "2.25rem",
                }}
              >
                By combining Agentic AI, natural language understanding, and
                intelligent orchestration, this solution illustrates how banks
                can increase customer satisfaction, reduce service costs, and
                drive deeper engagement--all while preparing their operations
                for the future of AI-driven banking.
              </h1>
            </div>
          </div>
        </div>
        {/* end header */}
        {/* laptop frame */}
        <div id="laptop-border">
          <div id="laptop">
            <div id="page-content">
              <iframe
                ref={iframeRef}
                src="https://demo-now.techzone.ibm.com/psl/li240l90"
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
        {/* footer */}
        <div id="footer">
          <img
            src={`${import.meta.env.BASE_URL}IBM_logo_black.svg`}
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
            src={`${import.meta.env.BASE_URL}gmf-logo.svg`}
            style={{
              height: "3rem",
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

export default SmartBranchPage;
