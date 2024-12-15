"use client";
import ErrorSummary from "@/components/Card/error_summary_card";
import InputField from "@/components/Input/InputField";
import { routes } from "@/services/api_route";
import { useMutatePostWithoutTokenRequest } from "@/services/api_service/general_service";
import useStoreInApp from "@/zuststand/useStoreInApp";
import Storage from "@/utils/Storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import swal from "sweetalert";
const LoginMainSection = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailActivation = () => {
    swal({
      title: "Email Activation",
      text: "To receive the confirmation mail again, please write your e-mail address!",
      //@ts-ignore
      content: "input",
      //@ts-ignore
      buttons: true,
      successMode: false,
    }).then((name) => {
      if (!name) throw null;
      if (name) {
        //call request here
      } else {
      }
    });
  };
  const { responseData, responseError, responseIsLoading, requestPayload } =
    useMutatePostWithoutTokenRequest((res: any) => {
      console.log("resno", res.statusCode);
      if (res.statusCode == 200) {
        if (typeof window !== "undefined") {
          Storage.set("accessToken", res.result);
          push("/dashboard");
          //  Storage.set("auth", stringifyData(resData?.authentication));
          //  Storage.set("user", stringifyData(resData?.user));
        }
      }
    });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    requestPayload({ payload: data, route: routes.loginUser() });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="limiter section-login">
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
              <span className="login100-form-title p-b-10 p-t-32">
                Welcome Back
              </span>
              <span className="login100-form-description p-b-30">
                Login to your account
              </span>

              <form onSubmit={handleSubmit}>
                <ErrorSummary errors={[responseError]} />
                <InputField
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Username Or Email"
                />

                <InputField
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit">
                    SignIn
                  </button>
                </div>
              </form>

              <div className="mt-3 login-buttons">
                <div className="row">
                  <div
                    className="col-md-4 text-center"
                    style={{ borderRight: "2px solid #B9B9B9" }}
                  >
                    <Link href="/forgot_password">Forgot Password</Link>
                  </div>
                  <div
                    className="col-md-4 text-center"
                    style={{ borderRight: "2px solid #B9B9B9" }}
                  >
                    <Link href="/register">REGISTER</Link>
                  </div>
                  <div className="col-md-4 text-center">
                    <Link
                      className="email-activation-button"
                      href="#"
                      onClick={handleEmailActivation}
                    >
                      Email Activation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMainSection;
