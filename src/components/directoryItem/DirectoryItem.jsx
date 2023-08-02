import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item-styles.jsx";

export default function DirectoryItem({ imageUrl, title, route }) {
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage img_url={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
