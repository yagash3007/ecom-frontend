import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // const fetchUserData = async () => {
    //   try {
    //     console.log(token), "bfheswbfhewbfuob";
    //     const token = localStorage.getItem("token");

    //     if (token) {
    //       const response = await axios.get("https://ecom-backend-deploy.onrender.com/users", {
    //         headers: {
    //           Authorization: ` ${token}`,
    //         },
    //       });
    //       setUserData(response.data);
    //     } else {
    //       console.error("No token found");
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user data", error);
    //   }
    // };
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token, "Token retrieved from localStorage");

        if (token) {
          // Decode the token
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          console.log(decodedToken, "Decoded Token");

          // Use the userId from the decoded token if necessary
          const userId = decodedToken.userId;
          console.log(userId, "User ID from token");

          // Fetch the user data
          const response = await axios.get(
            `https://ecom-backend-deploy.onrender.com/users/${userId}`,
            {
              headers: {
                Authorization: `${token}`, // Add 'Bearer' if your backend expects it
              },
            }
          );

          console.log(response.data, "Response Data");
          setUserData(response.data);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);
  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="w-full py-6 welcome-msg">
        <p className="text-lg text-qblack">Hello, {userData.name}</p>
        <h1 className="text-2xl font-bold text-qblack">Welcome Back</h1>
      </div>

      <div className="flex items-center justify-between w-full mt-6 space-x-4 quick-view-grid">
        {/* New Orders Card */}
        {/* <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qyellow transition-all duration-300 ease-in-out p-6 flex flex-col items-center">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <p className="mt-5 text-xl text-white group-hover:text-qblacktext">
            New Orders
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            0
          </span>
        </div> */}
        {/* Repeat for other cards with different SVGs and text */}

        {/* Example Card */}
        {/* <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qyellow transition-all duration-300 ease-in-out p-6 flex flex-col items-center">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <svg
              width="33"
              height="27"
              viewBox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <p className="mt-5 text-xl text-white group-hover:text-qblacktext">
            New Orders
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            0
          </span>
        </div> */}
      </div>

      <div className="flex items-start justify-between mt-8 dashboard-info bg-primarygray px-7 py-7">
        <div>
          <p className="text-[22px] font-semibold">Personal Information</p>
          <div className="mt-5">
            <table className="w-full">
              <tbody>
                <tr className="mb-5">
                  <td className="text-base text-qgraytwo w-[100px]">Name:</td>
                  <td className="text-base font-medium text-qblack">
                    {userData.name}
                  </td>
                </tr>
                <tr className="mb-5">
                  <td className="text-base text-qgraytwo w-[100px]">Email:</td>
                  <td className="text-base font-medium text-qblack">
                    {userData.email}
                  </td>
                </tr>
                {/* <tr className="mb-5">
                  <td className="text-base text-qgraytwo w-[100px]">Phone:</td>
                  <td className="text-base font-medium text-qblack">
                    {userData.phone || "Not Provided"}
                  </td>
                </tr> */}
                {/* <tr className="mb-5">
                  <td className="text-base text-qgraytwo w-[100px]">City:</td>
                  <td className="text-base font-medium text-qblack">
                    {userData.city || "Not Provided"}
                  </td>
                </tr> */}
                {/* <tr className="mb-5">
                  <td className="text-base text-qgraytwo w-[100px]">Zip:</td>
                  <td className="text-base font-medium text-qblack">
                    {userData.zip || "Not Provided"}
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[1px] h-[164px] bg-[#E4E4E4]"></div>
      </div>
      {/* <div className="ml-6">
          <p className="title text-[22px] font-semibold">Shop Info</p>
          <div className="mt-5">
            <table>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Name:</div>
                </td>
                <td className="text-base font-medium text-qblack">
                  Shuvo khan
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Email:</div>
                </td>
                <td className="text-base font-medium text-qblack">
                  shope@gmail.com
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Phone:</div>
                </td>
                <td className="text-base font-medium text-qblack">
                  98653467778
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>City:</div>
                </td>
                <td className="text-base font-medium text-qblack">
                  Dhaka,Bangladesh
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Zip:</div>
                </td>
                <td className="text-base font-medium text-qblack">4040</td>
              </tr>
            </table>
          </div>
        </div> */}
    </>
  );
}
