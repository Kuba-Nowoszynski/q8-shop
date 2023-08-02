import { Link } from "react-router-dom";

import ProductCard from "../productCard/ProductCard";

import "./category-preview.scss";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
