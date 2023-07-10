import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";

export default function App() {
  const Shop = () => <h2>I am shop page</h2>;
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
