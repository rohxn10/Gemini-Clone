import React, { useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="top">
                <img
                    src={assets.menu_icon}
                    alt="Menu icon"
                    className="menu"
                    onClick={toggleMenu}
                />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="New Chat icon" />
                    {!collapsed && <p>New Chat</p>}
                </div>
                <div className="recent">
                    <p className="recent-title">{!collapsed && "Recent"}</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="Message icon" />
                        {!collapsed && <p>what is react...</p>}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help icon" />
                    {!collapsed && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History icon" />
                    {!collapsed && <p>History</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings icon" />
                    {!collapsed && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
