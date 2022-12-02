import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar">
        <RxHamburgerMenu size={20} color="white" className="header__icon" />
        <span className="header__logo">BETA</span>
      </div>
      <nav className="header__nav-menu">
        <NavLink
          to={"/"}
          className={(navData) =>
            navData.isActive
              ? "header__nav-item header__nav-item--active"
              : "header__nav-item"
          }
        >
          <RxHamburgerMenu color="white" size={20} />
          Home
        </NavLink>
        <NavLink
          to={"/browser"}
          className={(navData) =>
            navData.isActive
              ? "header__nav-item header__nav-item--active"
              : "header__nav-item"
          }
        >
          <RxHamburgerMenu color="white" size={20} />
          Browse
        </NavLink>
        <NavLink
          to={"/mycollection"}
          className={(navData) =>
            navData.isActive
              ? "header__nav-item header__nav-item--active"
              : "header__nav-item"
          }
        >
          <RxHamburgerMenu color="white" size={20} />
          My Collection
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
