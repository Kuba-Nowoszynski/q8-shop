import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import Category from "../category/Category";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
