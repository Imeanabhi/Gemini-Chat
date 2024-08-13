import React , {useState}  from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
//hi
const Sidebar = () => {


    //for extending the sidebar
const[extended,setExtended] = useState(false)
  return (
    <div className="sidebar">
        <div className="top">
        {/*Here prev=>!prev is written because when the sidebar is opened and when we want to close
        sidebar its opposite logic should be implemented  */}
        <img onClick={()=>setExtended(prev=>!prev)} className="Menu"src={assets.menu_icon} alt=""/>
            <div className="new-chat">
                <img src={assets.plus_icon} alt=""/>
                    {extended?<p>New Chat</p>:null}
            </div>

    {extended?<div className="recent">
        <p className="recent-title">Recent</p>  
        <div className="recent-entry">
            <img src={assets.message_icon} alt=""/>
                <p>What is react ....</p>
    </div>
    </div>
    :null
    }
    </div>
<div className="bottom">
<div className="bottom-item recent-entry">
    <img className="questions" src={assets.question_icon} alt=""/>
    {extended?<p>Help</p>:null}
</div>

<div className="bottom-item recent-entry">
    <img src={assets.history_icon} alt=""/>
    {extended?<p>Activity</p>:null}
</div>

<div className="bottom-item recent-entry">
    <img src={assets.setting_icon} alt=""/>
    {extended?<p>Settings</p>:null}
</div>
</div>
</div>

)
}

export default Sidebar
