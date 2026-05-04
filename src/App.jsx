import React, { useRef, useState } from "react";
import "./App.scss";
import { Content, Accordion, AccordionItem, Button } from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";

import { Routes, Route } from "react-router-dom";

import ClientZeroPage from "./pages/ClientZeroPage";
import IVRPage from "./pages/IVRPage";
import LoanAgentPage from "./pages/LoanAgentPage";
import SaferPaymentsPage from "./pages/SaferPaymentsPage";
import SmartBranchPage from "./pages/SmartBranchPage";

export const demos = [
  { path: "/ivr", label: "IVR" },
  { path: "/saferpayments", label: "IBM Safer Payments" },
  { path: "/clientzero", label: "IBM as Client Zero" },
  { path: "/smartbranch", label: "Smart Branch" },
  { path: "/loanapproval", label: "Loan Approval" },
];

function HomePage() {
  {
    /* to handle state to close accordion item on next opening */
  }
  const [openItem, setOpenItem] = useState(null); // track the currently open item

  const handleToggle = (id) => {
    setOpenItem((prev) => (prev === id ? null : id)); // toggle current
  };

  return (
    <Content>
      {/* header items */}
      <img id="home-icon" src="/ibm-wxo.svg" />
      <h1 id="home-title">Reimagine Banking with Agentic AI</h1>
      <h2 id="home-tagline">
        Step into the art of the possible. Discover how AI-powered agents can
        transform customer experiences, streamline operations, and enhance
        security.
        <br /> <br />
        Choose your path and see innovation in action.
      </h2>

      {/* accordion component */}
      <Accordion className="my-accordion">
        <AccordionItem
          title="Interactive Voice Response (IVR)"
          open={openItem === 1}
          onHeadingClick={() => handleToggle(1)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            Built on the watsonx Orchestrate platform, this Interactive Voice
            Response (IVR) agent intelligently analyzes each caller’s request to
            infer intent and route financial advisors to the right support team
            based on Business Unit and Sub‑Business Unit.
          </p>
          <a href="/ivr" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </a>
        </AccordionItem>
        <AccordionItem
          title="IBM Safer Payments"
          open={openItem === 2}
          onHeadingClick={() => handleToggle(2)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            Stop scams before they happen with an AI fraud‑detection agent
            powered by IBM Safer Payments. It intercepts emerging threats in
            real time and automates investigations to protect customers faster.
          </p>
          <a href="/saferpayments" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </a>
        </AccordionItem>
        <AccordionItem
          title="IBM as Client Zero"
          open={openItem === 3}
          onHeadingClick={() => handleToggle(3)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            AskIBM, an orchestrator assistant, helps employees manage HR, IT,
            and other tasks without using systems like SAP, Workday, or
            ServiceNow. Through a simple interface, it routes requests to
            specialized AI agents—AskHR, AskSales, AskIT—using RAG and backend
            tools for secure, personalized answers. Employees stay in control
            with human‑in‑the‑loop approvals and feedback.
          </p>
          <a href="/clientzero" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </a>
        </AccordionItem>
        <AccordionItem
          title="Smart Branch Quick Assist"
          open={openItem === 4}
          onHeadingClick={() => handleToggle(4)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            By combining Agentic AI, natural language understanding, and
            intelligent orchestration, this solution illustrates how banks can
            increase customer satisfaction, reduce service costs, and drive
            deeper engagement--all while preparing their operations for the
            future of AI-driven banking.
          </p>
          <a href="/smartbranch" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </a>
        </AccordionItem>
        <AccordionItem
          title="Loan Approval"
          open={openItem === 5}
          onHeadingClick={() => handleToggle(5)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            Powered by IBM Decision Intelligence, this AI agent combines
            advanced reasoning with deterministic decision-making to ensure
            consistent, trusted outcomes. The result is a smarter, more reliable
            workflow where approvals, rejections, and fraud checks are never
            left to chance.
          </p>
          <a href="/loanapproval" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </a>
        </AccordionItem>
      </Accordion>

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
      </div>
    </Content>
  );
}

function App() {
  return (
    <>
      <Content>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/clientzero" element={<ClientZeroPage />} />
          <Route path="/ivr" element={<IVRPage />} />
          <Route path="/loanapproval" element={<LoanAgentPage />} />
          <Route path="/saferpayments" element={<SaferPaymentsPage />} />
          <Route path="/smartbranch" element={<SmartBranchPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
