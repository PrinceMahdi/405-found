import "./Sidebar.scss";




const friendsList=[
    {
        name:"ramblejamble24",
        img:{}
    },
    {
        name:"variantlord",
        img:{}
    },
    {
        name:"toole254",
        img:{}
    },
    {
        name:"bobman52",
        img:{}
    },
    {
        name:"HelpfulSeaLion",
        img:{}
    },
    {
        name:"status200",
        img:{}
    },
    {
        name:"merry50duck",
        img:{}
    },
    {
        name:"figmaaa",
        img:{}
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
            <img className="sidebar__user-image" alt="user image"/>
            <p className="sidebar__user-name">mrwaffles55</p>
            <img className="sidebar__user-downArrow" alt="down arrow icon"/>
        </div>
        <div className="sidebar__friends-container">
            <div className="friends__header">
                <div className="friends__header-contentContainer">
                    <span className="friends__header-content">Friends</span>
                    <span className="frinds">1/8</span>
                </div>
                <img />
            </div>
            <div>
                {friendsList.map((friend) => (
                    <>
                <img src={friend.img}/>
                <p>{friend.name}</p>
                </>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Sidebar;



