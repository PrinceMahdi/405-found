import "./Fifa.scss";
import Fifa from "../../../assets/images/No Play Button.svg";
import { NavLink } from "react-router-dom";
import closeIcon from "../../../assets/icons/close.svg";
import editIcon from "../../../assets/icons/edit.svg";
import downloadIcon from "../../../assets/icons/download.svg";
import shareIcon from "../../../assets/icons/share.svg";
import video from "../../../assets/videos/Fifa Highlight.mp4";
function showPopUp() {
  document.getElementById("videoPopUp").style.display = "block";
  document.getElementById("background").style.display = "block";
}
function hidePopUp() {
  document.getElementById("videoPopUp").style.display = "none";
  document.getElementById("background").style.display = "none";
}
const ApexLegends = () => {
  return (
    <>
      <section className="fifa">
        <img src={Fifa} alt="background image" className="fifa__home-img" />
        <button className="fifa__button" onClick={() => showPopUp()}>
          Play
        </button>
      </section>
      <section id="background" className="background">
        <section className="videoPopUp" id="videoPopUp">
          <div className="videoPopUp__close-iconWrapper">
            <img
              className="videoPopUp__close-icon"
              src={closeIcon}
              alt="close-icon"
              onClick={() => hidePopUp()}
            />
          </div>
          <div className="videoPopUp__video-container">
            <video width={448} height={270.91} controls>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
          <div className="videoPopUp__text-wrapper">
            <p className="videoPopUp__text">Your Highlight (12/012022)</p>
            <div className="videoPopUp__text-image">
              <img src={editIcon} className="videoPopUp__text-imageIcon" />
              <img src={downloadIcon} className="videoPopUp__text-imageIcon" />
              <img src={shareIcon} className="videoPopUp__text-imageIcon" />
            </div>
          </div>
          <div className="videoPopUp__btn-wrapper">
            <button className="videoPopUp__btn  videoPopUp__btn--save">
              SAVE IN DRAFT
            </button>
            <NavLink to={"/post"}>
              <button className="videoPopUp__btn  videoPopUp__btn--start">
                START A POST
              </button>
            </NavLink>
          </div>
        </section>
      </section>
    </>
  );
};
export default ApexLegends;
