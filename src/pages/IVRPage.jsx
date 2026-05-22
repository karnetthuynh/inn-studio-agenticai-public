import React, { useRef } from "react";
import { Content, Button } from "@carbon/react";
import { Restart, Home, CaretLeft, CaretRight } from "@carbon/icons-react";
import { NavLink, useLocation } from "react-router";
import { demos } from "../App";

function IVRPage() {
  const iframeRef = useRef(null);

  const resetIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://demo-now.techzone.ibm.com/psl/asj0x8e?g=cmjd4ijvg000704k6akz6hkl0&s=0";
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
        <div className="header" style={{ marginTop: "-3rem" }}>
          {/* icon above header */}
          <img
            src={`${import.meta.env.BASE_URL}ibm-wxo.svg`}
            style={{
              width: "6rem",
              height: "6rem",
              marginBottom: "2rem",
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
              Interactive Voice Response (IVR)
            </h1>
            {/* caption */}
            <div className="caption" style={{ marginBottom: "0.5rem" }}>
              <h1
                style={{
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                }}
              >
                Built on the watsonx Orchestrate platform, this IVR agent
                intelligently analyzes each caller’s request to infer intent and
                route the financial advisors to the right support team based on
                Business Unit and Sub‑Business Unit.
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
                src="https://demo-now.techzone.ibm.com/psl/asj0x8e?g=cmjd4ijvg000704k6akz6hkl0&s=0"
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
            src={`${import.meta.env.BASE_URL}bcflogo.svg`}
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

export default IVRPage;
