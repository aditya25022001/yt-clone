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
import MenuIcon from '@material-ui/icons/Menu';

export const Navigation = () => {
    return (
        <div className="navigation">
            
            
            <div className="goto">
                <div className="menu">
                    <MenuIcon style={{color:"white"}} />
                </div>
                <div className="logo">
                    <YouTubeIcon className="yt-icon" style={{ fontSize:30 }} />
                </div>
                <div className="yt-icon-label">YouTube<sup className="india">IN</sup>
                </div>
            </div>
            
            
            <div className="search-bar">
                <div className="textarea">
                    <input className="search" placeholder="Search"></input>
                </div>
                <div className="search-lens">
                    <SearchIcon className="lens" style={{fontSize: 20, color: "rgb(140, 140, 140)"}} />
                </div>
                <div className="mic">
                    <MicIcon style={{color:"white"}} />
                </div>
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
