import React from "react";
import './Main.css';
import {assets} from '../../assets/assets';

const Main = () => {
    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Para Myre, </span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Trippin pono?...kash ondo?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Homework help venam alle....ulup ondo?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Code error ayirikkum....</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>nee aa GPT myranod chothicha mathi</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enthelm adi" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        I may display inaccurate information. If you have a problem poi kuninjiri
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main