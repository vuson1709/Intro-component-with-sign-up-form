/*
         

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

*/

import IconError from "./images/icon-error.svg";

export default function App() {
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
        <form className="trial-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
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
