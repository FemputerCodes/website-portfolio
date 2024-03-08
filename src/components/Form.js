import React from "react";
import "../styles/Form.css";

function Form() {
  return (
    <div className="form-container">
      <form action="/submit">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <br />
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <br />
        <div>
          <label for="message">Message</label>
          <input type="text" id="message" name="message" />
        </div>
        <div className="button">
          <input class="submit" type="submit" value="Submit" />
          <input class="reset" type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
}

export default Form;
