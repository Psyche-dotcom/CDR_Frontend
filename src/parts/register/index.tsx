"use client";

import React, { useState, useEffect } from "react";
import { useMutatePostWithoutTokenRequest } from "@/services/api_service/general_service";
import Script from "next/script";
import InputField from "@/components/Input/InputField";
import { routes } from "@/services/api_route";

import ErrorSummary from "@/components/Card/error_summary_card";
import swal from "sweetalert";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  password: string;
  rePassword: string;
  token?: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    password: "",
    rePassword: "",
    token: "",
  });

  const { responseData, responseError, responseIsLoading, requestPayload } =
    useMutatePostWithoutTokenRequest((res: any) => {
      console.log("resno", res);

      if (res) {
        console.log(res);
        handleSuccessRegAlert("Registration successful!");
      }
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestPayload({ payload: formData, route: routes.registerUser() });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).grecaptcha) {
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha
          .execute("6Le6xy8pAAAAADJeve49efgsXeJBD_xCjwM_P9C6", {
            action: "user",
          })
          .then((token: string) => {
            setFormData((prevData) => ({ ...prevData, token }));
          });
      });
    }
  }, []);

  const handleSuccessRegAlert = (message: string) => {
    swal({
      title: "Success",
      text: message,
      icon: "success",
      //@ts-ignore
      button: "Login",
    }).then((will: any) => {
      console.log("SWAL confirmed", will);
      window.location.href = "/login";
    });
  };

  return (
    <div className="limiter section-register">
      <div
        className="container-login100"
        style={{
          backgroundImage: "url('/app-assets/login/images/WelcomeLogin.svg')",
        }}
      >
        <div className="wrap-login100">
          <div className="login100-form validate-form">
            <img
              className="login100-form-logo"
              src="/app-assets/images/logo/orj-logo-gray.png"
              alt="Logo"
            />
            <span className="login100-form-title p-b-34 p-t-27">REGISTER</span>
            <form onSubmit={handleSubmit}>
              <ErrorSummary errors={[responseError]} />
              <InputField
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <InputField
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              <InputField
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="Username"
              />
              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <InputField
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              <InputField
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
              <InputField
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
              <InputField
                type="password"
                name="rePassword"
                value={formData.rePassword}
                onChange={handleInputChange}
                placeholder="Re-enter Password"
              />
              <div id="recaptcha">
                <input type="hidden" name="token" value={formData.token} />
              </div>
              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  type="submit"
                  id="RegisterButton"
                >
                  REGISTER
                </button>
              </div>
              <div className="mt-3 login-buttons">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <a href="/login">Sign In</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Script src="/app-assets/mask/imask.js" strategy="afterInteractive" />
      <Script
        src="/app-assets/page-scripts/register.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6Le6xy8pAAAAADJeve49efgsXeJBD_xCjwM_P9C6"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default Register;
