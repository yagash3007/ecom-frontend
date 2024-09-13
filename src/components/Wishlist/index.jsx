// import BreadcrumbCom from "../BreadcrumbCom";
// import EmptyWishlistError from "../EmptyWishlistError";
// import PageTitle from "../Helpers/PageTitle";
// import Layout from "../Partials/Layout";
// import ProductsTable from "./ProductsTable";
// import axios from "axios";

// export default function Wishlist({ wishlist = true }) {
//   const addToWishlist = async (itemId) => {
//     try {
//       const response = await axios.post('/wishlist', { itemId });
//       console.log('Item added to wishlist:', response.data);
//     } catch (error) {
//       console.error('Error adding item to wishlist:', error);
//     }
//   };
//   const removeFromWishlist = async (itemId) => {
//     try {
//       const response = await axios.post('/wishlist/id', { itemId });
//       console.log('Item removed from wishlist:', response.data);
//     } catch (error) {
//       console.error('Error removing item from wishlist:', error);
//     }
//   };

//   return (
//     <Layout childrenClasses={wishlist ? "pt-0 pb-0" : ""}>
//       {wishlist === false ? (
//         <div className="w-full wishlist-page-wrapper">
//           <div className="mx-auto container-x">
//             <BreadcrumbCom
//               paths={[
//                 { name: "home", path: "/" },
//                 { name: "wishlist", path: "/wishlist" },
//               ]}
//             />
//             <EmptyWishlistError />
//           </div>
//         </div>
//       ) : (
//         <div className="wishlist-page-wrapper w-full bg-white pb-[60px]">
//           <div className="w-full">
//             <PageTitle
//               title="Wishlist"
//               breadcrumb={[
//                 { name: "home", path: "/" },
//                 { name: "wishlist", path: "/wishlist" },
//               ]}
//             />
//           </div>
//           <div className="w-full mt-[23px]">
//             <div className="mx-auto container-x">
//               <ProductsTable className="mb-[30px]" />
//               <div className="w-full mt-[30px] flex sm:justify-end justify-start">
//                 <div className="sm:flex sm:space-x-[30px] items-center">
//                   <button type="button">
//                     <div className="w-full mb-5 text-sm font-semibold text-qred sm:mb-0">
//                       Clean Wishlist
//                     </div>
//                   </button>
//                   <div className="w-[180px] h-[50px]">
//                     <button type="button" className="yellow-btn">
//                       <div className="w-full text-sm font-semibold">
//                         Add to Cart All
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// }
// import React, { useState } from "react";
// import BreadcrumbCom from "../BreadcrumbCom";
// import EmptyWishlistError from "../EmptyWishlistError";
// import PageTitle from "../Helpers/PageTitle";
// import Layout from "../Partials/Layout";
// import ProductsTable from "./ProductsTable";

// const handleAddToWishlist = (itemId) => {
//   addToWishlist(itemId).then(() => {});
// };

// const handleRemoveFromWishlist = (itemId) => {
//   removeFromWishlist(itemId).then(() => {});
// };

import React, { useState, useEffect } from "react";
import BreadcrumbCom from "../BreadcrumbCom";
import EmptyWishlistError from "../EmptyWishlistError";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ProductsTable from "./ProductsTable";
import { addToWishlist, removeFromWishlist } from "./services";

export default function Wishlist({ wishlist = true }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      const response = await fetch(
        "https://ecom-backend-deploy.onrender.com/wishlist"
      );
      const data = await response.json();
      setItems(data);
    };

    fetchWishlistItems();
  }, []);

  const handleAddToWishlist = async (itemId, quantity) => {
    try {
      await addToWishlist(itemId, quantity);
    } catch (error) {
      console.error("Failed to add item to wishlist:", error);
    }
  };

  const handleRemoveFromWishlist = async (itemId) => {
    try {
      await removeFromWishlist(itemId);
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Failed to remove item from wishlist:", error);
    }
  };

  return (
    <Layout childrenClasses={wishlist ? "pt-0 pb-0" : ""}>
      {wishlist === false ? (
        <div className="w-full wishlist-page-wrapper">
          <div className="mx-auto container-x">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "wishlist", path: "/wishlist" },
              ]}
            />
            <EmptyWishlistError />
          </div>
        </div>
      ) : (
        <div className="wishlist-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="Wishlist"
              breadcrumb={[
                { name: "home", path: "/" },
                { name: "wishlist", path: "/wishlist" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="mx-auto container-x">
              <ProductsTable
                className="mb-[30px]"
                items={items}
                onAddToWishlist={handleAddToWishlist}
                onRemoveFromWishlist={handleRemoveFromWishlist}
              />
              <div className="w-full mt-[30px] flex sm:justify-end justify-start">
                <button className="btn">Continue Shopping</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
