import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Home from "../../assets/icons/Home.svg";
import Browser from "../../assets/icons/Browse.svg";
import Collection from "../../assets/icons/Collection.svg";
import Download from "../../assets/icons/arrow.down.to.line.alt.svg";
import Apex from "../../assets/images/2x/Apex Icon Left.png";
import Fifa from "../../assets/images/2x/Fifa Icon Left.png";

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
          <img src={Home} alt="icon" className="header__nav-icon"></img>
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
          <img src={Browser} alt="icon" className="header__nav-icon"></img>
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
          <img src={Collection} alt="icon" className="header__nav-icon"></img>
          My Collection
        </NavLink>
        <h3 className="header__nav-title">Installed games</h3>
        <NavLink
          to={"/games/fifa"}
          className={(navData) =>
            navData.isActive
              ? "header__nav-item header__nav-item--active__fifa"
              : "header__nav-item header__nav-item__fifa"
          }
        >
          <img src={Fifa} alt="icon" className="header__nav-icon__fifa"></img>
          FIFA 23
        </NavLink>
        <NavLink
          to={"/games/apex-legends"}
          className={(navData) =>
            navData.isActive
              ? "header__nav-item header__nav-item--active__apex"
              : "header__nav-item header__nav-item__apex"
          }
        >
          <img
            src={Apex}
            alt="icon"
            className="header__nav-icon header__nav-icon__apex"
          ></img>
          APEX Legends
        </NavLink>
        <div className="header--bottom">
          <img src={Download} className="header__download-icon"></img>
          <h2 className="header__download-title">Download manager</h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;
