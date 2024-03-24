import React from "react";
import Form from "../components/Form";
import "../styles/Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1>
        <span style={{ color: "var(--lightblueviolet)", fontWeight: "500" }}>
          Contact
        </span>
      </h1>
      <Form />
    </div>
  );
}

export default Contact;
