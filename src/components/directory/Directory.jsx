import DirectoryItem from "../directoryItem/DirectoryItem";
import "./directory.scss";

const categories = [
  {
    title: "Hats",
    id: self.crypto.randomUUID(),
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    title: "Jackets",
    id: self.crypto.randomUUID(),
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    title: "Sneakers",
    id: self.crypto.randomUUID(),
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    title: "Women",
    id: self.crypto.randomUUID(),
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/women",
  },
  {
    title: "Men",
    id: self.crypto.randomUUID(),
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/men",
  },
];
export default function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}
