import "./Modal.scss";



// function showDeleteConfirm() {
//     document.getElementById("videoPopUp").style.display = "block";
//     document.getElementById("background").style.display = "block";
    
//   }
// showDeleteConfirm();
//   // click cancel icon
//   function hideDeleteComponent() {
//     document.getElementById("videoPopUp").style.display = "none";
//     document.getElementById("background").style.display = "none";
//   }

const Modal = () => {
    return (
        <section id="background" className="background">
        <section className="videoPopUp" id="videoPopUp">
          <div className="videoPopUp__close-iconWrapper">
            <img
              className="videoPopUp__close-icon"
              
              alt="close-icon"
              // onClick={() => hideDeleteComponent()}
            />
          </div>
          <div className="videoPopUp__video-container">
          <video width={400} height={200} controls>
                    <source  type="video/mp4"></source>
                  </video>
             
          
          </div>
          <div className="videoPopUp__text-wrapper">
            <p className="videoPopUp__text">
              Your Highlight(12/012022)
            </p>
            <div className="videoPopUp__text-image">
                <img />
                <img />
                <img />
            </div>
          </div>
          <div className="videoPopUp__btn-wrapper">
            <button
              className="videoPopUp__btn  videoPopUp__btn--save"
            >
              SAVE IN DRAFT
            </button>
            <button
              className="videoPopUp__btn  videoPopUp__btn--start"
            >
              START A POST
            </button>
          </div>
        </section>
      </section>
    );
  };
  
  export default Modal;
  
  
  
  