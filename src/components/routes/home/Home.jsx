import Directory from "../../directory/Directory";

export default function Home() {
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
    <div>
      <Directory categories={categories} />
    </div>
  );
}
