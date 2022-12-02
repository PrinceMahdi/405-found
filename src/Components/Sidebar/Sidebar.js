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
    <div>
        <div>
            <img />
            <p></p>
        </div>
        <div>
            <img />
            <p></p>
            <img />
        </div>
        <div>
            <div>
                <div>
                    <span></span>
                    <span></span>
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



