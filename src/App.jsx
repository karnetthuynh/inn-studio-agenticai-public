import React, { useRef, useState } from "react";
import "./App.scss";
import { Content, Accordion, AccordionItem, Button } from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";

import { Routes, Route, Link } from "react-router-dom";

import ClientZeroPage from "./pages/ClientZeroPage";
import IVRPage from "./pages/IVRPage";
import SmartBranchPage from "./pages/SmartBranchPage";
import LoanApprovalPage from "./pages/LoanApprovalPage";
import SaferPaymentsPage from "./pages/SaferPaymentsPage";

export const demos = [
  {
    path: "/clientzero",
    label: "Client Zero: watsonx Orchestrate AI Agent Chat",
  },
  // { path: "/smartbranch", label: "Smart Branch Quick Assist" },
  {
    path: "/ivr",
    label: "Interactive Voice Response (IVR)",
  },
  { path: "/saferpayments", label: "IBM Safer Payments" },
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
      <img id="home-icon" src={`${import.meta.env.BASE_URL}ibm-wxo.svg`} />
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
          title="Client Zero: watsonx Orchestrate AI Agent Chat"
          open={openItem === 1}
          onHeadingClick={() => handleToggle(1)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            AskIBM, an orchestrator assistant, helps employees manage HR, IT,
            and other tasks without using systems like SAP, Workday, or
            ServiceNow. Through a simple interface, it routes requests to
            specialized AI agents—AskHR, AskSales, AskIT—using RAG and backend
            tools for secure, personalized answers. Employees stay in control
            with human‑in‑the‑loop approvals and feedback.
          </p>
          <Link to="/clientzero" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </Link>
        </AccordionItem>
        {/* <AccordionItem
          title="Smart Branch Quick Assist"
          open={openItem === 2}
          onHeadingClick={() => handleToggle(2)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            By combining Agentic AI, natural language understanding, and
            intelligent orchestration, this solution illustrates how banks can
            increase customer satisfaction, reduce service costs, and drive
            deeper engagement, all while preparing their operations for the
            future of AI-driven banking.
          </p>
          <Link to="/smartbranch" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </Link>
        </AccordionItem> */}
        <AccordionItem
          title="Interactive Voice Response (IVR)"
          open={openItem === 2}
          onHeadingClick={() => handleToggle(2)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            Built on the watsonx Orchestrate platform, this IVR agent
            intelligently analyzes each caller’s request to infer intent and
            route the financial advisors to the right support team based on
            Business Unit and Sub‑Business Unit.
          </p>
          <Link to="/ivr" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </Link>
        </AccordionItem>
        <AccordionItem
          title="IBM Safer Payments"
          open={openItem === 3}
          onHeadingClick={() => handleToggle(3)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            Stop scams before they happen with an AI fraud‑detection agent
            powered by IBM Safer Payments. It intercepts emerging threats in
            real time and automates investigations to protect customers faster.
          </p>
          <Link to="/saferpayments" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </Link>
        </AccordionItem>
        <AccordionItem
          title="Loan Approval"
          open={openItem === 4}
          onHeadingClick={() => handleToggle(4)}
        >
          <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
            Powered by IBM Decision Intelligence, this AI loan-approval agent
            automates complex evaluations to deliver fast, trustworthy
            approvals. The result is a smarter, more efficient lending journey
            for both customers and financial institutions.
          </p>
          <Link to="/loanapproval" className="text-link-cta">
            Click to explore this demo
            <ArrowRight
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginLeft: "1rem",
              }}
            />
          </Link>
        </AccordionItem>
      </Accordion>
      {/* footer with logos */}
      <div id="footer">
        <img
          src={`${import.meta.env.BASE_URL}IBM_logo_black.svg`}
          style={{
            // width: "115px",
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
          <Route path="/smartbranch" element={<SmartBranchPage />} />
          <Route path="/ivr" element={<IVRPage />} />
          <Route path="/saferpayments" element={<SaferPaymentsPage />} />
          <Route path="/loanapproval" element={<LoanApprovalPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
