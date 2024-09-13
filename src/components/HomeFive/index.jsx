import React, { useEffect, useState } from "react";
import BrandSection from "../Home/BrandSection";
import ProductsAds from "../Home/ProductsAds";
import Banner from "./Banner";
import SectionStyleOneHmFour from "../Helpers/SectionStyleOneHmFour";
import datas from "../../data/products.json";
import CampaignCountDown from "./CampaignCountDown";
import SectionStyleThreeHmFour from "../Helpers/SectionStyleThreeHmFour";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import LayoutHomeFive from "../Partials/LayoutHomeFive";
import axios from "axios";

function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ecom-backend-deploy.onrender.com/product"
        );
        setProducts(response.data);
        console.log(response);

        console.log("product");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <LayoutHomeFive childrenClasses=" pt-0">
      <Banner className="mb-[60px]" />
      <SectionStyleOneHmFour
        products={products}
        sectionTitle="All Products"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <BrandSection className="mb-[60px]" />
      <CampaignCountDown lastDate="2023-10-04 4:00:00" className="mb-[60px]" />
      <SectionStyleOneHmFour
      // products={products.slice(20, 24)}
      // sectionTitle="Feature Design"
      // seeMoreUrl="/all-products"
      // className="new-products mb-[60px]"
      />
      {/* <ProductsAds
        ads={[`${import.meta.env.VITE_PUBLIC_URL}/assets/images/ads-3.png`]}
        className="products-ads-section mb-[60px]"
      /> */}
      <SectionStyleThreeHmFour
      // sectionTitle="New Arrival"
      // seeMoreUrl="/all-products"
      // products={products.slice(16, 28)}
      // className="mb-[60px]"
      />

      {/* <ProductsAds
        sectionHeight="164"
        ads={[`${import.meta.env.VITE_PUBLIC_URL}assets/images/ads-4.png`]}
        className="products-ads-section mb-[60px]"
      /> */}
    </LayoutHomeFive>
  );
}

export default Index;
