import React, { useRef } from "react";
import { Content, Button } from "@carbon/react";
import { Restart, Home, CaretLeft, CaretRight } from "@carbon/icons-react";
import { NavLink, useLocation } from "react-router";
import { demos } from "../App";

function BigBlueDentalClaimPage() {
  const iframeRef = useRef(null);

  {
    /* function to reset the iframe to the start of the demo */
  }
  const resetIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://embed.figma.com/proto/U5iE7R5JNT61zFrAEiB5OV/BigBlue-Life-Dental-Demo?node-id=24-390&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A390&embed-host=share&hide-ui=1";
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
          {/* icon abover header */}
          <img
            src={`${import.meta.env.BASE_URL}ibm-wxo.svg`}
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
              BigBlue Dental Claim
            </h1>
            <div className="caption">
              {/* Demo Description */}
              <h1
                style={{
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                }}
              >
                Learn about AI capabilities in identifying claims fraud.
              </h1>
            </div>
          </div>
        </div>
        {/* the laptop frame to embed your demo link into */}
        <div id="laptop-border">
          <div id="laptop">
            <div id="page-content">
              {/* <iframe ref={iframeRef} src={'https://www.figma.com/embed?embed_host=share&url=${"https://www.figma.com/proto/U5iE7R5JNT61zFrAEiB5OV/BigBlue-Life-Dental-Demo?node-id=24-390&p=f&t=fqgJh1FddkmSjqmf-8&scaling=contain&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=24%3A390&hide-ui=1}'}/> */}
              <iframe
                ref={iframeRef}
                src="https://embed.figma.com/proto/U5iE7R5JNT61zFrAEiB5OV/BigBlue-Life-Dental-Demo?node-id=24-390&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A390&embed-host=share&hide-ui=1"
                allowfullscreen
              ></iframe>
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
        {/* footer with logos */}
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

export default BigBlueDentalClaimPage;
