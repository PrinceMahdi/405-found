import "./Fifa.scss";
import Fifa from "../../../assets/images/No Play Button.svg";

const ApexLegends = () => {
  return (
    <>
      <section className="fifa">
        <img src={Fifa} alt="background image" className="fifa__home-img" />
        
        <button className="fifa__button">Play</button>
      </section>
    </>
  );
};

export default ApexLegends;
