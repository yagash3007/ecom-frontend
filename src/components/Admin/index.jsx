// import React from "react";
// import BrandSection from "../Home/BrandSection";
// import ProductsAds from "../Home/ProductsAds";
// import Banner from "./Banner";
// import SectionStyleOneHmFour from "../Helpers/SectionStyleOneHmFour";
// import datas from "../../data/products.json";
// import CampaignCountDown from "./CampaignCountDown";
// import SectionStyleThreeHmFour from "../Helpers/SectionStyleThreeHmFour";
// import SectionStyleFour from "../Helpers/SectionStyleFour";
// import LayoutHomeFive from "../Partials/LayoutHomeFive";

// function Index() {
//   const { products } = datas;
//   return (
//     <LayoutHomeFive childrenClasses=" pt-0">
//       <Banner className="mb-[60px]" />
//       <SectionStyleOneHmFour
//         products={products.slice(16, 20)}
//         sectionTitle="Trendy Design"
//         seeMoreUrl="/all-products"
//         className="new-products mb-[60px]"
//       />
//       <BrandSection className="mb-[60px]" />
//       <CampaignCountDown lastDate="2023-10-04 4:00:00" className="mb-[60px]" />
//       <SectionStyleOneHmFour
//         products={products.slice(20, 24)}
//         sectionTitle="Feature Design"
//         seeMoreUrl="/all-products"
//         className="new-products mb-[60px]"
//       />
//       <ProductsAds
//         ads={[`${import.meta.env.VITE_PUBLIC_URL}/assets/images/ads-3.png`]}
//         className="products-ads-section mb-[60px]"
//       />
//       <SectionStyleThreeHmFour
//         sectionTitle="New Arrival"
//         seeMoreUrl="/all-products"
//         products={products.slice(16, 28)}
//         className="mb-[60px]"
//       />

//       <ProductsAds
//         sectionHeight="164"
//         ads={[`${import.meta.env.VITE_PUBLIC_URL}assets/images/ads-4.png`]}
//         className="products-ads-section mb-[60px]"
//       />
//       <SectionStyleFour
//         products={products.slice(16, 28)}
//         sectionTitle="Popular Sales"
//         seeMoreUrl="/all-products"
//         className="mb-[120px]"
//       />
//     </LayoutHomeFive>
//   );
// }

// export default Index;
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Adminlayout/layout";
import UserManagement from "./Usermanagemet/usermanagement";
import ProductManagement from "./Productmanagement/productmangement";
import OrderManagement from "./Ordermanagement/ordermanagement";
import CategoryManagement from "./Categorymanagement/categorymanagement";
function Index() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}></Route>
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/categories" element={<CategoryManagement />} />
      </Routes>
    </AdminLayout>
  );
}

export default Index;
