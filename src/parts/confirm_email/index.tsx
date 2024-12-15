"use client";
import { routes } from "@/services/api_route";
import { useMutatePostWithoutTokenRequest } from "@/services/api_service/general_service";
import { useEffect, useState } from "react";

const ConfirmEmailMainSection = () => {
  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const { responseData, responseError, responseIsLoading, requestPayload } =
    useMutatePostWithoutTokenRequest((res: any) => {
      if (res) {
        setMessage(res?.message);
        setIsSuccess(true);
        console.log(res);
      }
    });

  useEffect(() => {
    const queryString = window.location.search;

    // Use a regex to match the token and email parameters
    const tokenMatch = queryString.match(/token=([^&]*)/);
    const emailMatch = queryString.match(/email=([^&]*)/);

    // Extract the token and email using regex matches, if they exist
    const tokenParam = tokenMatch ? tokenMatch[1] : null;
    const emailParam = emailMatch ? emailMatch[1] : null;

    if (tokenParam && emailParam) {
      const data = {
        email: emailParam,
        token: tokenParam,
      };
      console.log(data);
      requestPayload({ payload: data, route: routes.confirmUser() });
    } else {
      setMessage("Invalid request. Missing parameters.");
      setIsSuccess(false);
    }
    if (responseIsLoading == false && responseError != null) {
      setIsSuccess(false);
      setMessage(responseError);
    }
  }, []);
  console.log(responseError);
  return (
    <div className="limiter section-login">
      <div
        className="container-login100"
        style={{
          backgroundImage: "url('/app-assets/login/images/WelcomeLogin.svg')",
        }}
      >
        <div className="wrap-login100">
          {isSuccess !== null && (
            <div
              className={`alert ${
                isSuccess ? "alert-success" : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mt-3 login-buttons">
            <div className="row">
              <div className="col-md-12 text-center">
                <a href="/login">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailMainSection;
