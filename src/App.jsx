import CategoryItem from "./components/categoryItem/categoryItem";

import "./categories.scss";

function App() {
  const categories = [
    {
      title: "Hats",
      id: self.crypto.randomUUID(),
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      title: "Jackets",
      id: self.crypto.randomUUID(),
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      title: "Sneakers",
      id: self.crypto.randomUUID(),
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      title: "Women",
      id: self.crypto.randomUUID(),
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      title: "Men",
      id: self.crypto.randomUUID(),
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}

export default App;
