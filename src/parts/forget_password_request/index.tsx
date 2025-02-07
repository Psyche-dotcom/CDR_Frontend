"use client";
import { routes } from "@/services/api_route";
import { useMutatePostWithoutTokenRequest } from "@/services/api_service/general_service";
import React, { useState } from "react";

interface ForgotPasswordFormProps {}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = () => {
  const [email, setEmail] = useState<string>("");
  const { responseData, responseError, responseIsLoading, requestPayload } =
    useMutatePostWithoutTokenRequest((res: any) => {
      console.log("resno", res.statusCode);
      if (res.statusCode == 200) {
        console.log(res);
      }
    });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email: email,
    };
    requestPayload({ payload: data, route: routes.forgetPassword() });
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
