import { Link } from "react-router-dom";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";

export default function ProductCardStyleOne({ datas, type }) {
  console.log("jioasdjoaisjd", datas);

  const available = datas?.stock;

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-white product-card-one group"
      style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        className="w-full h-[364px] bg-white flex justify-center items-center p-2.5 mb-6 relative overflow-hidden"
        style={{
          background: `url(${datas?.imageUrls[0]}) no-repeat center`,
        }}
      >
        {datas && (
          <>
            <div className="px-[30px] absolute left-0 top-3 w-full">
              <div className="flex justify-between progress-title ">
                <p className="text-xs leading-6 text-qblack font-400">
                  Products Available
                </p>
                <span className="text-sm leading-6 text-qblack font-600">
                  {datas?.stock}
                </span>
              </div>
              <div className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">
                <div
                  style={{
                    width: `${datas?.stock ? 100 - available : 0}%`,
                  }}
                  className={`h-full absolute left-0 top-0  ${
                    type === 3 ? "bg-qh3-blue" : "bg-qyellow"
                  }`}
                ></div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="product-card-details px-[30px] pb-[30px] relative">
        <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[35px] transition-all duration-300 ease-in-out">
          <button
            onClick={() => {
              handleAddToCart(datas);
            }}
            type="button"
            className={type === 3 ? "blue-btn" : "yellow-btn"}
          >
            <div className="flex items-center space-x-3">
              <span>Add To Cart</span>
            </div>
          </button>
        </div>
        <div className="reviews flex space-x-[1px] mb-3">
          {/* {Array.from(Array(datas.review), () => (
              <span key={datas.review + Math.random()}>
                <Star />
              </span>
            ))} */}
        </div>
        <Link to={`/single-product/${datas._id}`}>
          <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
            {datas?.name}
          </p>
        </Link>
        <p className="price">
          <span className="main-price text-qgray line-through font-600 text-[18px]">
            {datas?.price}
          </span>
          <span className="offer-price text-qred font-600 text-[18px] ml-2">
            20%
          </span>
        </p>
      </div>
      <div className="absolute flex flex-col space-y-2 transition-all duration-300 ease-in-out quick-access-btns group-hover:right-4 -right-10 top-20">
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
