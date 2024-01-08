/*
         
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

*/

import { useEffect, useState } from "react";
import IconError from "./images/icon-error.svg";

function separateCamelCase(str) {
  return (
    str[0].toUpperCase() + str.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")
  );
}

function checkEmail(email) {
  // Regular expression for a simple email validation
  if (!email) return;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}

export default function App() {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle Input'value Change
  /*
  - Spread Operator (...inputs): This copies all existing properties from the current inputs state object into a new object.
- Computed Property Name ([event.target.name]): This dynamically creates a property key based on the name of the input field that was changed (event.target.name).
- New Value (event.target.value): This assigns the new value entered in the input field (event.target.value) to the corresponding property in the new object.
  */
  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  // Handle Form Submit
  function handleSubmit(e) {
    e.preventDefault();

    // Loop over inputs and check if any input is empty
    function validateInput() {
      const newErrors = {};

      Object.entries(inputs).forEach(([inputName, inputValue]) => {
        if (!inputValue)
          newErrors[inputName] = `${separateCamelCase(
            inputName
          )} cannot be empty`;
      });

      setErrors(newErrors);
    }
    validateInput();

    // Check Email Valid
    if (!inputs.email) return;
    if (!checkEmail(inputs.email))
      setErrors((err) => ({
        ...err,
        email: "Looks like this is not an email",
      }));
  }

  return (
    <div className="container">
      <div className="text-content">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="trial">
        <p className="trial-text">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
        <form className="trial-form" onSubmit={handleSubmit}>
          <label
            className={errors.firstName ? "required" : ""}
            htmlFor="firstName"
          >
            {errors.firstName && (
              <>
                <img src={IconError} alt="Error Icon" className="icon-error" />
                <span className="text-error">{errors.firstName}</span>
              </>
            )}
            <input
              type="text"
              placeholder="First Name"
              value={inputs.firstName}
              onChange={handleChange}
              name="firstName"
            />
          </label>
          <label
            className={errors.lastName ? "required" : ""}
            htmlFor="lastName"
          >
            {errors.lastName && (
              <>
                <img src={IconError} alt="Error Icon" className="icon-error" />
                <span className="text-error">{errors.lastName}</span>
              </>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={inputs.lastName}
              onChange={handleChange}
            />
          </label>
          <label className={errors.email ? "required" : ""} htmlFor="email">
            {errors.email && (
              <>
                <img src={IconError} alt="Error Icon" className="icon-error" />
                <span className="text-error">{errors.email}</span>
              </>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label
            className={errors.password ? "required" : ""}
            htmlFor="password"
          >
            {errors.password && (
              <>
                <img src={IconError} alt="Error Icon" className="icon-error" />
                <span className="text-error">{errors.password}</span>
              </>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button>Claim your free trial</button>
          <p className="trial-tos">
            By clicking the button, you are agreeing to our{" "}
            <span className="tos">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
}
