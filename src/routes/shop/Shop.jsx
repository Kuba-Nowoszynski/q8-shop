import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

import ProductCard from "../../components/productCard/ProductCard";
import './shop.scss'

export default function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
<ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
