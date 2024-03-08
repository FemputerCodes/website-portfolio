import React from "react";
import Form from "../components/Form";
import "../styles/Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h2>
        <span style={{ color: "var(--blueviolet)", fontWeight: "500" }}>
          Contact
        </span>
      </h2>
      <Form />
    </div>
  );
}

export default Contact;
