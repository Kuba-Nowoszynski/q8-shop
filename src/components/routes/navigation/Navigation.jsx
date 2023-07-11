import { Outlet, Link } from "react-router-dom";

import logo from "/public/logo.png";
import "./navigation.scss";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sing-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
