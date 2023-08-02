import DirectoryItem from "../directoryItem/DirectoryItem";
import "./directory.scss";

export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}
