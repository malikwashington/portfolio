import React from "react";
import ResumePDF from "../assets/Resume.pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import "./styles/Screens.css";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <a id="resume" href={ResumePDF} target="_blank" rel="noopener noreferrer">
        Click here for a PDF of my resume
      </a>
    </div>
  );
}
