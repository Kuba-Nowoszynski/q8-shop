import CategoryItem from "../categoryItem/CategoryItem";
import "./directory.scss";

export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}
