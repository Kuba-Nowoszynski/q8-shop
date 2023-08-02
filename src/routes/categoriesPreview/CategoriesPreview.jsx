import { useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import CategoryPreview from "../../components/categoryPreview/CategoryPreview";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
