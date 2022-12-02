import "./Sidebar.scss";
// import {profileIcon} from "../../assets/icons/";
import profileplus from "../../assets/icons/Property 1=Default-1.svg";
import userActive from "../../assets/icons/Property 1=Variant3@2x.svg";
import userImage from "../../assets/icons/Property 1=Default@2x.svg";




const friendsList=[
    {
        name:"ramblejamble24",
        img:{userActive}
    },
    {
        name:"variantlord",
        img:{userActive}
    },
    {
        name:"toole254",
        img:{userImage}
    },
    {
        name:"bobman52",
        img:{userImage}
    },
    {
        name:"HelpfulSeaLion",
        img:{userImage}
    },
    {
        name:"status200",
        img:{userImage}
    },
    {
        name:"merry50duck",
        img:{userImage}
    },
    {
        name:"figmaaa",
        img:{userImage}
    },
];


const Sidebar = () => {
  return (
    <div className="sidebar__container">
        <div className="sidebar__header">
            <img className="sidebar__header-icon" alt="Profile icon"/>
            <p>Profile</p>
        </div>
        <div className="sidebar__user">
            <img className="sidebar__user-image" alt="user image" src={userImage}/>
            <p className="sidebar__user-name">mrwaffles55</p>
            <img className="sidebar__user-downArrow" alt="down arrow icon"/>
        </div>
        <div className="sidebar__friends-container">
            <div className="friends__header">
                <div className="friends__header-contentContainer">
                    <span className="friends__header-content">Friends</span>
                    <span className="friends__header-content">1/8</span>
                </div>
                <img className="friends__header-icon" alt="profile-icon" src={profileplus}/>
            </div>
            <div className="friends__list">
                {friendsList.map((friend,key) => (
                     <div className="friends__listItem" key={key}>
                        <img src={friend.img} className="friends__listItem-image"/>
                        <p className="friends__listItem-name">{friend.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Sidebar;



