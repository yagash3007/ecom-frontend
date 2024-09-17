import { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../apis/api";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

export default function Login() {
  const [checked, setValue] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigateTo = useNavigate();

  const rememberMe = () => {
    setValue(!checked);
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);

      if (response) {
        const { token, userId, navigate } = response;
        console.log("User ID set:", userId);

        // Store token and userId in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("UserID", userId);

        // Show toast notification after a 500ms delay
        // setTimeout(() => {
        //   toast.success("Login successful!", { autoClose: 5000 });
        // },);
        toast.error("Logout successful!", { autoClose: 5000 });

        console.log("Login successful:", token);

        // Navigate based on the response
        if (navigate) {
          navigateTo(`${navigate}`);
        } else {
          navigateTo("/");
        }
      } else {
        setError("Invalid credentials");
        toast.error("Invalid credentials"); // Show error notification
      }
    } catch (error) {
      setError("An error occurred during login.");
      toast.error("An error occurred during login."); // Show error notification
      console.error("Login error:", error);
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="w-full py-10 login-page-wrapper">
        <div className="mx-auto container-x">
          <div className="relative items-center lg:flex">
            <div className="lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="relative flex flex-col items-center justify-center text-center title-area mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    Log In
                  </h1>
                  <div className="-mt-6 shape">
                    <svg
                      width="172"
                      height="29"
                      viewBox="0 0 172 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                        stroke="#FFBB38"
                      />
                    </svg>
                  </div>
                </div>
                <div className="input-area">
                  <div className="mb-5 input-item">
                    <InputCom
                      placeholder="example@gmail.com"
                      label="Email Address*"
                      name="email"
                      type="email"
                      inputClasses="h-[50px] p-[15px] "
                      value={email} // Binding email state to input value
                      inputHandler={(e) => setEmail(e.target.value)} // Updating state on change
                    />
                  </div>
                  <div className="mb-5 input-item">
                    <span input></span>
                    <InputCom
                      placeholder="Password"
                      label="Password*"
                      name="password"
                      type="password"
                      inputClasses="h-[50px] p-[15px] "
                      value={password} // Binding password state to input value
                      inputHandler={(e) => setPassword(e.target.value)} // Updating state on change
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="flex items-center justify-between forgot-password-area mb-7">
                    <div className="remember-checkbox flex items-center space-x-2.5">
                      <button
                        onClick={rememberMe}
                        type="button"
                        className="flex items-center justify-center w-5 h-5 border text-qblack border-light-gray"
                      >
                        {checked && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        onClick={rememberMe}
                        className="text-base text-black"
                      >
                        Remember Me
                      </span>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-base text-qyellow"
                    >
                      Forgot Password
                    </Link>
                  </div>
                  <div className="signin-area mb-3.5">
                    <div className="flex justify-center">
                      <button
                        onClick={handleLogin}
                        type="button"
                        className="black-btn mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>Log In</span>
                      </button>
                    </div>
                    <a
                      href="#"
                      className="w-full border border-qgray-border h-[50px] flex space-x-3  justify-center bg-[#FAFAFA] items-center"
                    >
                      {/* Social login icons */}
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span className="text-qgray">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-qyellow">
                      Sign Up
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <Thumbnail />
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}
