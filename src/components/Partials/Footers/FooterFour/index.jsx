import { Link } from "react-router-dom";
import Facebook from "../../../Helpers/icons/Facebook";
import Instagram from "../../../Helpers/icons/Instagram";
import Youtube from "../../../Helpers/icons/Youtube";

export default function FooterFour() {
  return (
    <footer
      className="footer-section-wrapper"
      style={{
        backgroundImage: `url(${
          import.meta.env.VITE_PUBLIC_URL
        }/assets/images/footer-four.png)`,
      }}
    >
      <div className="container-x block mx-auto pt-[83px]">
        <div className="lg:flex justify-between mb-[95px]">
          <div className="w-full mb-10 lg:w-4/10 lg:mb-0">
            {/* logo area */}
            <div className="mb-14">
              <Link to="/">
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/assets/images/logo-4.svg`}
                  alt="logo"
                />
              </Link>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Delivery & Returns
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Warranty
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mb-10 lg:w-2/10 lg:mb-0">
            <div className="mb-5">
              <h6 className="text-[18] font-500 text-[#2F2F2F]">About us</h6>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Rave’s Story
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Work With Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Coporate News
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Investors
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mb-10 lg:w-2/10 lg:mb-0 ">
            <div className="mb-5">
              <h6 className="text-[18] font-500 text-[#2F2F2F]">Online Shop</h6>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Furniture
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Decoration
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Kitchen
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Interior
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mb-10 lg:w-2/10 lg:mb-0">
            <div className="mb-5">
              <h6 className="text-[18] font-500 text-[#2F2F2F]">
                Useful Links
              </h6>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Secure Payment
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Terms of Use
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-white text-[15px] hover:text-[#9a9a9a] hover:underline">
                      Archived Products
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center">
          <div className="flex items-center justify-between mb-3 lg:space-x-5">
            <div className="flex items-center space-x-5">
              <a href="#">
                <Instagram className="fill-current text-white hover:text-[#9a9a9a]" />
              </a>
              <a href="#">
                <Facebook className="fill-current text-white hover:text-[#9a9a9a]" />
              </a>
              <a href="#">
                <Youtube className="fill-current text-white hover:text-[#9a9a9a]" />
              </a>
            </div>
            <span className="sm:text-base text-[10px] text-white font-300">
              ©2022
              <a
                href="https://yagash.com/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 font-500 text-qh4-pink"
              >
                yagash
              </a>
              All rights reserved
            </span>
          </div>
          <div className="">
            <a href="#">
              <img
                width="318"
                height="28"
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/images/payment-getways.png`}
                alt="payment-getways"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
