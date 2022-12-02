import "./NewPost.scss";
import { BsSearch } from "react-icons/bs";
import Back from "../../assets/icons/Back.svg";
import BackOne from "../../assets/icons/BackOne.svg";
import Smile from "../../assets/icons/PPI.svg";
import Video from "../../assets/images/FifaVideo.mp4";
import Twt from "../../assets/icons/Twitch.svg";
import You from "../../assets/icons/Youtube.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Inst from "../../assets/icons/instagram.svg";
import Text from "../../assets/icons/Text.svg";

const NewPost = () => {
  return (
    <>
      <main className="post">
        <section className="post-top">
          <div className="post-top__search">
            <div className="post-top__search-right">
              {" "}
              <img
                src={BackOne}
                alt="back arrow"
                className="post-top__search-arrow"
              />
              <img src={Back} alt="back arrow" />
              <input
                placeholder="       Search games and add-ons"
                className="post-top__search-placeholder"
              />
              <BsSearch className="post-top__search-image" size={17} />
            </div>

            <button className="post-top__button-small">JOIN EA PLAY</button>
          </div>
        </section>

        <div className="post-bottom">
          <div className="post-bottom__box">
            <h3 className="post-bottom__box-title"> Create New Post</h3>
            <div className="post-bottom__box-user">
              <img src={Smile} alt="smiling icon" />
              <p className="post-bottom__box-text">mrwaffles55</p>{" "}
            </div>
          </div>
          <div className="post-bottom__main">
            <div className="post-bottom__left">
              {" "}
              <video width={440} height={270} controls>
                <source src={Video} type="video/mp4"></source>
              </video>
              <p className="post-bottom__left-header">
                Your Highlight (12/01/2022)
              </p>
              <p className="post-bottom__left-text">
                Game:FIFA 23 - Championship League
              </p>
            </div>
            <div className="post-bottom__left-second">
              <form className="form">
                <input
                  placeholder="Write a title..."
                  className="form-input"
                ></input>
                <input
                  placeholder="Write a caption..."
                  className="form-input"
                ></input>
                <input placeholder="Tags: #fifa" className="form-input"></input>
                <div className="form-button">
                  <button>SAVE IN DRAFT</button>
                  <button className="post-top__button-large">SHARE</button>
                </div>
              </form>
            </div>
            <div className="post-bottom__left-icons">
              <img
                src={Twt}
                alt="twitter icon"
                className="post-bottom__icons-item"
              ></img>
              <img
                src={You}
                alt="youtube icon"
                className="post-bottom__icons-item"
              ></img>
              <img
                src={Facebook}
                alt="facebook icon"
                className="post-bottom__icons-item"
              ></img>
              <img
                src={Inst}
                alt="instagram icon"
                className="post-bottom__icons-item"
              ></img>
              <img
                src={Text}
                alt="text icon"
                className="post-bottom__icons-item"
              ></img>
            </div>{" "}
          </div>
        </div>
      </main>
    </>
  );
};

export default NewPost;
