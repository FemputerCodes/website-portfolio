import React, { useState } from "react";
import "../styles/Form.css";

function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a20f20a-fdc9-40e3-87d0-4b65e59dc988");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          aria-label="name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          aria-label="email"
          required
        />
        <textarea
          rows="6"
          name="message"
          placeholder="message"
          aria-label="message"
          required
        />
        <button className="submit" type="submit">
          Send Message
        </button>
        <span style={{ fontSize: "14px", textAlign: "center" }}>{result}</span>
      </form>
    </div>
  );
}

export default Form;
