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
                <MenuIcon style={{color:"white"}} />
                <YouTubeIcon className="yt-icon" style={{ fontSize:30, paddingLeft:22, color:'red', objectFit:"contain"}} />
                <div className="yt-icon-label">YouTube<sup className="india" style={{fontSize:10, color:"rgb(140, 140, 140)"}}>IN</sup>
                </div>
            </div>
            
            <div className="search-bar">
                <input className="search" placeholder="Search"></input>
                <div className="search__icon" style={{ backgroundColor:"rgb(70,69,69)" , height:31, display:'flex', alignItems:'center'}}>
                    <SearchIcon className="lens" style={{fontSize:18}} />
                </div>
                <MicIcon style={{color:"white", marginLeft:10}} />
            </div>
            
            
            <div className="accessories">
                <VideoCallIcon style={{color:"white"}} />
                <AppsIcon style={{color:"white"}} />
                <NotificationsIcon style={{color:"white"}} />
                <AccountCircleIcon style={{color:"white", fontSize:40}} />
            </div>
        </div>
    )
}
