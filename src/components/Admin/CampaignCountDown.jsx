import { Link } from "react-router-dom";
import CountDown from "../Helpers/CountDown";

export default function CampaignCountDown({ className, lastDate }) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(lastDate);

  return (
    <div>
      <div className={`w-full lg:h-[460px] ${className || ""}`}>
        <div className="h-full mx-auto container-x">
          <div className="items-center h-full">
            <div
              data-aos="fade-right"
              className="w-full h-full mb-5 campaign-countdown lg:mb-0"
              style={{
                background: `url(${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/images/campaign-cover-countdown-4.jpg) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Link to="/flash-sale">
                <div className="w-full p-5 xl:p-12">
                  {/* <div className="countdown-wrapper w-full flex space-x-[23px] mb-10">
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#EB5757]">
                          {showDate}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                        Days
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#2F80ED]">
                          {showHour}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                        Hours
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#219653]">
                          {showMinute}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                        Minutes
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#EF5DA8]">
                          {showSecound}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                        Seconds
                      </p>
                    </div>
                  </div> */}
                  <div className="mb-4 countdown-title">
                    <h1 className="text-[44px] text-qblack font-medium">
                      WOO! Flash Sale
                    </h1>
                    <p className="text-[18px] text-qblack leading-7">
                      You get into the 2k+ best Products in Flash offer with
                      <br /> a special-shaped sofa for sale.
                    </p>
                  </div>
                  <div className=" w-[100px] h-8 border-b border-qblack">
                    <div className="inline-flex items-center h-full space-x-2 ">
                      <span className="text-sm leading-7 tracking-wide font-600">
                        Shop Now
                      </span>
                      <span>
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2.08984"
                            y="0.636719"
                            width="6.94219"
                            height="1.54271"
                            transform="rotate(45 2.08984 0.636719)"
                            fill="#1D1D1D"
                          />
                          <rect
                            x="7"
                            y="5.54492"
                            width="6.94219"
                            height="1.54271"
                            transform="rotate(135 7 5.54492)"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
