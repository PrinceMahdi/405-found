import "./Profile.scss";
import ProfileLogo from "../../assets/icons/Profile Picture icon.svg";
import Canada from "../../assets/icons/Canada Icon.svg";
import Level from "../../assets/icons/Level Icon.svg";
import Heart from "../../assets/icons/Like Icon.svg";
import Comment from "../../assets/icons/Comment Icon.svg";
import Share from "../../assets/icons/Share Icon.svg";
import Video from "../../assets/videos/Fifa Highlight.mp4";
import Image_one from "../../assets/images/image 29.svg";
import Image_two from "../../assets/images/image 30.svg";
import Image_three from "../../assets/images/image 31.svg";

const Profile = () => {
  return (
    <>
      <section className="profile">
        <div className="profile--top">
          <div className="profile--top__container">
            <img
              src={ProfileLogo}
              alt="profile"
              className="profile--top__img"
            />
            <div className="profile--top__content">
              <div className="profile--top__content--left">
                <h1 className="profile--top__content--left-user">
                  mrwaffles55
                </h1>
                <h3 className="user__location">
                  Bob Laiton <img src={Canada} alt="flag" /> BC, Canada
                </h3>
              </div>
              <div className="profile--top__content--right">
                <h3 className="level">EA Level</h3>
                <img src={Level} alt="level" />
              </div>
            </div>
          </div>
          <div className="profile--bottom">
            <div className="profile--bottom--left">
              <div className="profile--bottom--left__container">
                <h1 className="profile--bottom--left__container-title">
                  Feed:
                </h1>
                <div className="profile__card">
                  <video width={400} height={200} controls>
                    <source src={Video} type="video/mp4"></source>
                  </video>
                  <div className="profile__card--right">
                    <div className="profile__card--right--top">
                      <h3 className="profile__card-title">
                        Crazy long range FIFA goal!
                      </h3>
                      <p className="profile__card-date">12/01/2022</p>
                    </div>
                    <p className="profile__card-description">
                      I scored this banger of a goal in FIFA today. I think
                      using left trigger while shooting makes the keeper
                      confused. This is also my entry into the EA SharePlay
                      competition to win $50. #EAApp #Shareplay #fifa
                    </p>
                    <div className="profile__card-stats">
                      <p className="profile__card-views">19 Views</p>
                      <div className="profile__card-socials">
                        <div className="profile__card-socials__container">
                          <img
                            src={Heart}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">10</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Comment}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">04</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Share}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile__card">
                  <img src={Image_one} alt="card" width={400} height={200} />
                  <div className="profile__card--right">
                    <div className="profile__card--right--top">
                      <h3 className="profile__card-title">
                        Beautiful scenes in Apex
                      </h3>
                      <p className="profile__card-date">11/28/2022</p>
                    </div>
                    <p className="profile__card-description">
                      Heres a screenshot I took in Apex that I thought showed
                      how beautiful the game really is. Wild how gaming has
                      evolved from the days of the first Battlefield.
                    </p>
                    <div className="profile__card-stats">
                      <p className="profile__card-views">412 Views</p>
                      <div className="profile__card-socials">
                        <div className="profile__card-socials__container">
                          <img
                            src={Heart}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">400</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Comment}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">32</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Share}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile__card">
                  <img src={Image_two} alt="card" width={400} height={200} />
                  <div className="profile__card--right">
                    <div className="profile__card--right--top">
                      <h3 className="profile__card-title">
                        Spent 10 Hours on Apex
                      </h3>
                      <p className="profile__card-date">10/05/2022</p>
                    </div>
                    <p className="profile__card-description">
                      I really love this game. I can't believe I didn't know
                      about it sooner! I spent a little over 10 hours on it in
                      the past day alone!! Can't wait to play more.
                    </p>
                    <div className="profile__card-stats">
                      <p className="profile__card-views">823 Views</p>
                      <div className="profile__card-socials">
                        <div className="profile__card-socials__container">
                          <img
                            src={Heart}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">44</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Comment}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">9</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Share}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">21</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile__card">
                  <img src={Image_three} alt="card" width={400} height={200} />
                  <div className="profile__card--right">
                    <div className="profile__card--right--top">
                      <h3 className="profile__card-title">
                        FIFA 23 Release Day FUT
                      </h3>
                      <p className="profile__card-date">10/03/2022</p>
                    </div>
                    <p className="profile__card-description">
                      Wanted to share my FUT team on release day. I know its all
                      none-rare golds but it’s the very first day so I think I
                      did pretty well. Let me know what you think!
                    </p>
                    <div className="profile__card-stats">
                      <p className="profile__card-views">1,429 Views</p>
                      <div className="profile__card-socials">
                        <div className="profile__card-socials__container">
                          <img
                            src={Heart}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">102</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Comment}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">23</p>
                        </div>
                        <div className="profile__card-socials__container">
                          <img
                            src={Share}
                            className="profile__card-social__icon"
                          ></img>
                          <p className="profile__card-text">14</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile--bottom--right">
              <div className="profile--bottom--right__achievements">
                <div className="profile--bottom--right__achievements__container profile--bottom--right__achievement--first">
                  <p className="profile--bottom--right__achievement">
                    Achievement
                  </p>
                  <p className="profile--bottom--right__achievement">22</p>
                </div>
                <div className="profile--bottom--right__achievements__container">
                  <p className="profile--bottom--right__achievement">Badges</p>
                  <p className="profile--bottom--right__achievement">7</p>
                </div>
                <div className="profile--bottom--right__achievements__container">
                  <p className="profile--bottom--right__achievement">Games</p>
                  <p className="profile--bottom--right__achievement">16</p>
                </div>
                <div className="profile--bottom--right__achievements__container">
                  <p className="profile--bottom--right__achievement">Friends</p>
                  <p className="profile--bottom--right__achievement">8</p>
                </div>
                <div className="profile--bottom--right__achievements__container">
                  <p className="profile--bottom--right__achievement">
                    Followers
                  </p>
                  <p className="profile--bottom--right__achievement">236</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
