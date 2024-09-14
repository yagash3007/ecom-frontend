import { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../../apis/api";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [checked, setValue] = useState(false);
  const navigate = useNavigate();

  const rememberMe = () => {
    setValue(!checked);
  };

  const handlesignup = async () => {
    try {
      const response = await signupUser(
        firstname,
        lastname,
        email,
        password,
        phoneno,
        postalCode,
        address,
        city
      );

      if (response) {
        console.log("Signup successful:", response);
        navigate("/login"); // Navigate to the login page after successful signup
      } else {
        setError("Signup failed: Invalid credentials");
      }
    } catch (error) {
      setError("An error occurred during signup.");
      console.error("Signup error:", error);
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="w-full py-10 login-page-wrapper">
        <div className="mx-auto container-x">
          <div className="relative items-center lg:flex">
            <div className="lg:w-[572px] w-full lg:h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="relative flex flex-col items-center justify-center text-center title-area mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    Create Account
                  </h1>
                  <div className="-mt-6 shape">
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#FFBB38"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="input-area">
                  {/* Form Fields */}
                  <div className="flex flex-col mb-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <InputCom
                      placeholder="Name"
                      label="First Name*"
                      name="fname"
                      type="text"
                      inputClasses="h-[50px] p-[15px]"
                      value={firstname}
                      inputHandler={(e) => setFirstname(e.target.value)}
                    />

                    <InputCom
                      placeholder="Name"
                      label="Last Name*"
                      name="lname"
                      type="text"
                      inputClasses="h-[50px] p-[15px]"
                      value={lastname}
                      inputHandler={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <InputCom
                      placeholder="@gmail.com"
                      label="Email Address*"
                      name="email"
                      type="email"
                      inputClasses="h-[50px] p-[15px]"
                      value={email}
                      inputHandler={(e) => setEmail(e.target.value)}
                    />

                    <InputCom
                      placeholder="phone no"
                      label="Phone*"
                      name="phone"
                      type="text"
                      inputClasses="h-[50px] p-[15px]"
                      value={phoneno}
                      inputHandler={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <InputCom
                      placeholder="Password"
                      label="Password*"
                      name="Password"
                      type="password"
                      inputClasses="h-[50px] p-[15px]"
                      value={password}
                      inputHandler={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <div className="mb-6">
                      <InputCom
                        placeholder="Your address Here"
                        label="Address*"
                        name="Address"
                        type="text"
                        inputClasses="h-[50px] p-[15px]"
                        value={address}
                        inputHandler={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <div className="mb-6">
                      <InputCom
                        placeholder="Enter City"
                        label="City*"
                        name="City"
                        type="text"
                        inputClasses="h-[50px]"
                        value={city}
                        inputHandler={(e) => setCity(e.target.value)}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Postcode / ZIP*"
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="00000"
                          value={postalCode}
                          inputHandler={(e) => setPostalCode(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="forgot-password-area mb-7">
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
                        I agree all
                        <span className="text-qblack">
                          terms and conditions
                        </span>
                        in BigShop.
                      </span>
                    </div>
                  </div>
                  {error && (
                    <p className="mb-4 text-center text-red-500">{error}</p>
                  )}
                  <button
                    onClick={handlesignup}
                    type="button"
                    className="w-full text-base leading-[24px] text-white bg-qblack border border-qblack h-[50px] font-bold"
                  >
                    Create Account
                  </button>
                </div>
                <h6 className="mt-8 text-center text-qblack">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-qblue">Login</span>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-[570px]">
              <Thumbnail />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
