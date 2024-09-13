import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";

export default function TopBar({ className }) {
  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="h-full mx-auto container-x">
          <div className="flex items-center justify-between h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Account
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/tracking-order">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden topbar-dropdowns sm:block">
              <div className="flex space-x-6">
                <div className="flex items-center space-x-1 country-select">
                  <div>
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/assets/images/country-logo-16x16.png`}
                      width="16"
                      height="16"
                      alt="country logo"
                      className="overflow-hidden rounded-full"
                    />
                  </div>
                  <Selectbox
                    className="w-fit"
                    datas={["United State", "Bangladesh", "India"]}
                  />
                  <div>
                    <Arrow className="fill-current qblack" />
                  </div>
                </div>
                <div className="flex items-center space-x-1 currency-select">
                  <Selectbox className="w-fit" datas={["USD", "BDT"]} />
                  <Arrow className="fill-current qblack" />
                </div>
                <div className="flex items-center space-x-1 language-select">
                  <Selectbox className="w-fit" datas={["Bangla", "english"]} />
                  <Arrow className="fill-current qblack" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
