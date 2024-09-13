import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../apis/product_services"; // Import your API service

export default function ProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrls[0]} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
      {/* Render more product details as needed */}
    </div>
  );
}
