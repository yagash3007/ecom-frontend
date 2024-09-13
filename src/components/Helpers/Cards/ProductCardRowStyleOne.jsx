import { Link } from "react-router-dom";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";

export default function ProductCardRowStyleTwo({ className, datas, type }) {
  return (
    <div
      data-aos="fade-left"
      className={`product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
        <div className="w-1/3 h-full lg:w-1/2">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/${
              datas.image
            }`}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 h-full">
          <div>
            {/* reviews */}
            <div className="flex mb-3 space-x-1">
              {Array.from(Array(datas.review), () => (
                <span key={datas.review + Math.random()}>
                  <Star />
                </span>
              ))}
            </div>
            <Link to="/single-product">
              <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
                {datas.title}
              </p>
            </Link>
            <p className="price mb-[26px]">
              <span className="main-price text-qgray line-through font-600 sm:text-[18px] text-base">
                {datas.price}
              </span>
              <span className="offer-price text-qred font-600 sm:text-[18px] text-base ml-2">
                {datas.offer_price}
              </span>
            </p>
            <button type="button" className="w-[110px] h-[30px]">
              <span className={type === 3 ? "blue-btn" : "yellow-btn"}>
                {" "}
                Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* quick-access-btns */}
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
        {/* <a href="#">
          <span className="flex items-center justify-center w-10 h-10 rounded bg-primarygray">
            <QuickViewIco />
          </span>
        </a> */}
        {/* <a href="#">
          <span className="flex items-center justify-center w-10 h-10 rounded bg-primarygray">
            <ThinLove />
          </span>
        </a> */}
        {/* <a href="#">
          <span className="flex items-center justify-center w-10 h-10 rounded bg-primarygray">
            <Compair />
          </span>
        </a> */}
      </div>
    </div>
  );
}
