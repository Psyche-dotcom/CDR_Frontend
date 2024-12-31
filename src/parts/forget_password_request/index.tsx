"use client";
import React, { useState } from "react";

interface ForgotPasswordFormProps {}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = () => {
  // Step 2: Create state for the email input field
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // try {
    //   // Step 5: Send the email to an API using fetch or any HTTP client of your choice
    //   const response = await fetch("/api/forgot-password", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }), // Sending the email to the API
    //   });

    //   if (response.ok) {
    //     // Handle success (e.g., show a success message)
    //     console.log("Email sent successfully");
    //   } else {
    //     // Handle error (e.g., show an error message)
    //     console.error("Error sending email");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="limiter section-login">
      <div
        className="container-login100"
        style={{
          backgroundImage: 'url("/app-assets/login/images/WelcomeLogin.svg")',
        }}
      >
        <div className="wrap-login100">
          <div className="login100-form validate-form">
            <img
              className="login100-form-logo"
              src="/app-assets/images/logo/orj-logo-gray.png"
              alt="Logo"
            />
            <span className="login100-form-title p-b-34 p-t-27">
              FORGOT PASSWORD
              {/* {t("CDR_FORGOTPASSWORD")} */}
            </span>
            <form onSubmit={handleSubmit}>
              {" "}
              {/* Step 4: Attach the form submit handler */}
              <div className="text-danger"></div>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={email} // Step 3: Bind the email input to state
                  onChange={(e) => setEmail(e.target.value)} // Update the state when input changes
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf207;"
                ></span>
              </div>
              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  type="submit"
                  id="ForgotPasswordButton"
                >
                  Send Email
                  {/* {t("CDR_SendEmail")} */}
                </button>
              </div>
              <div className="mt-3 login-buttons">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <a href="/login">
                      {/* {t("CDR_SignIn")} */}
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
