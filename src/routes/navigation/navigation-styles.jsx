import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white !important;
  width: auto;
  z-index: 99;
`;

export const LogoContainer = styled(Link)`
  img {
    width: 100px;
    padding: 10px 20px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.5rem;
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
`;
