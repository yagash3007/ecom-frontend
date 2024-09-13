import RangeSlider from "react-range-slider-input";
import Checkbox from "../Helpers/Checkbox";

export default function ProductsFilter({
  filters,
  checkboxHandler,
  volume,
  volumeHandler,
  storage,
  filterstorage,
  className,
  filterToggle,
  filterToggleHandler,
}) {
  return (
    <>
      <div
        className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${
          className || ""
        }  ${filterToggle ? "block" : "hidden lg:block"}`}
      >
        <div className="pb-10 border-b filter-subject-item border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h1 className="text-base text-black font-500">
              Product categories
            </h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="mobileLaptop"
                      name="mobileLaptop"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.mobileLaptop}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobileLaptop"
                      className="text-xs font-black capitalize font-400"
                    >
                      Mobile & Laptops
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="gaming"
                      name="gaming"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.gaming}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gaming"
                      className="text-xs font-black capitalize font-400"
                    >
                      Gaming Entertainment
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="imageVideo"
                      name="imageVideo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.imageVideo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="imageVideo"
                      className="text-xs font-black capitalize font-400"
                    >
                      Image & Video
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="vehicles"
                      name="vehicles"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.vehicles}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vehicles"
                      className="text-xs font-black capitalize font-400"
                    >
                      Vehicles
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="furnitures"
                      name="furnitures"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.furnitures}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="furnitures"
                      className="text-xs font-black capitalize font-400"
                    >
                      Furnitures
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sport"
                      name="sport"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sport}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sport"
                      className="text-xs font-black capitalize font-400"
                    >
                      Sport
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="foodDrinks"
                      name="foodDrinks"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.foodDrinks}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="foodDrinks"
                      className="text-xs font-black capitalize font-400"
                    >
                      Food & Drinks
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="fashion"
                      name="fashion"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.fashion}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fashion"
                      className="text-xs font-black capitalize font-400"
                    >
                      Fashion Accessories
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black capitalize font-400"
                    >
                      Toilet & Sanitation
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="makeupCorner"
                      name="makeupCorner"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.makeupCorner}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="makeupCorner"
                      className="text-xs font-black capitalize font-400"
                    >
                      Makeup Corner
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="babyItem"
                      name="babyItem"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.babyItem}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="babyItem"
                      className="text-xs font-black capitalize font-400"
                    >
                      Baby Items
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-10 mt-10 border-b filter-subject-item border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h1 className="text-base text-black font-500">Price Range</h1>
          </div>
          <div className="mb-5 price-range">
            <RangeSlider
              value={volume}
              onInput={volumeHandler}
              min={10}
              max={1000}
            />
          </div>
          <p className="text-xs text-qblack font-400">
            Price: ${volume.min} - ${volume.max}
          </p>
        </div>
        <div className="pb-10 mt-10 border-b filter-subject-item border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h1 className="text-base text-black font-500">Brands</h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="apple"
                      name="apple"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.apple}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apple"
                      className="text-xs font-black capitalize font-400"
                    >
                      apple
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="samsung"
                      name="samsung"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.samsung}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="samsung"
                      className="text-xs font-black capitalize font-400"
                    >
                      Samsung
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="walton"
                      name="walton"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.walton}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="walton"
                      className="text-xs font-black capitalize font-400"
                    >
                      walton
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="oneplus"
                      name="oneplus"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.oneplus}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="oneplus"
                      className="text-xs font-black capitalize font-400"
                    >
                      oneplus
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="vivo"
                      name="vivo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.vivo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vivo"
                      className="text-xs font-black capitalize font-400"
                    >
                      vivo
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="oppo"
                      name="oppo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.oppo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="oppo"
                      className="text-xs font-black capitalize font-400"
                    >
                      oppo
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="xiomi"
                      name="xiomi"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.xiomi}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="xiomi"
                      className="text-xs font-black capitalize font-400"
                    >
                      xiomi
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="others"
                      name="others"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.others}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="others"
                      className="text-xs font-black capitalize font-400"
                    >
                      others
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-10 mt-10 border-b filter-subject-item border-qgray-border">
          <div className="subject-title mb-[30px]">
            <h1 className="text-base text-black font-500">Storage</h1>
          </div>
          <div className="filter-items">
            <div className="flex space-x-[5px] flex-wrap">
              <span
                onClick={() => filterstorage("64GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${
                  storage === "64GB"
                    ? "bg-qyellow text-qblack border-none"
                    : " text-qgray "
                }`}
              >
                64GB
              </span>
              <span
                onClick={() => filterstorage("128GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${
                  storage === "128GB"
                    ? "bg-qyellow text-qblack border-none"
                    : " text-qgray "
                }`}
              >
                128GB
              </span>
              <span
                onClick={() => filterstorage("256GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${
                  storage === "256GB"
                    ? "bg-qyellow text-qblack border-none"
                    : " text-qgray "
                }`}
              >
                256GB
              </span>
              <span
                onClick={() => filterstorage("512GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${
                  storage === "512GB"
                    ? "bg-qyellow text-qblack border-none"
                    : " text-qgray "
                }`}
              >
                512GB
              </span>
              <span
                onClick={() => filterstorage("1024GB")}
                className={` font-400 border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${
                  storage === "1024GB"
                    ? "bg-qyellow text-qblack border-none"
                    : " text-qgray "
                }`}
              >
                1024GB
              </span>
            </div>
          </div>
        </div>
        <div className="pb-10 mt-10 filter-subject-item">
          <div className="subject-title mb-[30px]">
            <h1 className="text-base text-black font-500">Sizes</h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeS"
                      name="sizeS"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeS}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeS"
                      className="text-xs font-black capitalize font-400"
                    >
                      s
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeM"
                      name="sizeM"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeM}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeM"
                      className="text-xs font-black capitalize font-400"
                    >
                      M
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeXL"
                      name="sizeXL"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeXL}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeXL"
                      className="text-xs font-black capitalize font-400"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeXXL"
                      name="sizeXXL"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeXXL}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeXXL"
                      className="text-xs font-black capitalize font-400"
                    >
                      XXL
                    </label>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between mb-5 item">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeFit"
                      name="sizeFit"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeFit}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeFit"
                      className="text-xs font-black capitalize font-400"
                    >
                      Sliem Fit
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={filterToggleHandler}
          type="button"
          className="fixed z-50 flex items-center justify-center w-10 h-10 border rounded top-5 right-5 lg:hidden border-qred text-qred"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
