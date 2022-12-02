import "./HomePage.scss";
import Hero from "../../assets/images/Background.png";
import { BsSearch } from "react-icons/bs";
// import { Back } from "../../assets/icons/Back.svg";
import Apex from "../../assets/images/1x/Apex Picture.png";
import Fifa from "../../assets/images/1x/Fifa bottom Picture.png";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <section className="main-top">
          <div className="main__hero">
            {" "}
            <img src={Hero}></img>
          </div>

          <div className="main-top__search">
            {/* <img>{Back}</img> */}
            <input
              placeholder="Search"
              className="main-top__search-placeholder"
            />
            <BsSearch className="main-top__search-image" size={20} />
            <button>JOIN EA PLAY</button>
          </div>
          <div className="main-top__box">
            <h3 className="main-top__box-header"> EA SharePlay </h3>
            <p className="main-top__box-sub"> Record your best clips</p>
            <p className="main-top__box-text">
              Members can now record highlight clips from all their favorite
              games! We will capture your best moments and create the highlight
              clips for you. Then, you can simply share the clips with your
              friends on the EA AppTM
            </p>
            <button>Learn more</button>
          </div>
        </section>
        <section className="main-bottom">
          <div className="main-bottom__box">
            <img className="main-bottom__box-image" src={Apex}></img>
            <h3 className="main-bottom__box-header">A new season begins </h3>
            <p className="main-bottom__box-text">
              Conjure your inner strength in Apex Legends: Eclipse
            </p>
          </div>
          <div className="main-bottom__box">
            <img className="main-bottom__box-image" src={Fifa}></img>
            <h3 className="main-bottom__box-header">A new season begins </h3>
            <p className="main-bottom__box-text">
              Conjure your inner strength in Apex Legends: Eclipse
            </p>
          </div>
          <div className="main-bottom__box">
            <img className="main-bottom__box-image" src={Apex}></img>
            <h3 className="main-bottom__box-header">A new season begins </h3>
            <p className="main-bottom__box-text">
              Conjure your inner strength in Apex Legends: Eclipse
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
