import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled.img`
  width: 90%;
  height: 95%;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.95rem;
  font-weight: bold;
  bottom: 15%;
`;
