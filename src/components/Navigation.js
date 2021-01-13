import React from 'react'
import '../App.css'
import '../Stylesheets/navigation.css'
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="goto">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
            </div>
            <div className="logo">
                <YouTubeIcon className="yt-icon" style={{ fontSize:30 }} />
                <div className="yt-icon-label">YouTube
                    <sup className="india">IN</sup>
                </div>
            </div>
            <div className="search-bar">
                <input className="search" placeholder="Search"></input>
            </div>
            <div className="search-lens">
                <SearchIcon className="lens" style={{fontSize: 20, color: "rgb(140, 140, 140)"}} />
            </div>
            <div className="mic">
                <MicIcon style={{color:"white"}} />
            </div>
            <div className="accessories">
                <div className="add-video">
                    <VideoCallIcon style={{color:"white"}} />
                </div>
                <div className="yt-apps">
                    <AppsIcon style={{color:"white"}} />
                </div>
                <div className="bell-icon">
                    <NotificationsIcon style={{color:"white"}} />
                </div>
                <div className="profile">
                    <AccountCircleIcon style={{color:"white", fontSize:40}} />
                </div>
            </div>
        </div>
    )
}
