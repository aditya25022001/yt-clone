import React , { useState } from 'react'
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
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import { Flag } from '@material-ui/icons';

export const Navigation = () => {
     
    const [searchTerm, setSearchTerm] = useState('');
    const [toggleOff, toggleOn] = useState(true);
    const [initLink, finalLink] = useState("/more_from_youtube");

    return (
        <div className="navigation">
            <div className="goto">
                <MenuIcon style={{color:"white"}} />
                <Link to="/">
                    <YouTubeIcon className="yt-icon" style={{ fontSize:30, paddingLeft:22, color:'red', objectFit:"contain", marginTop:6}} />
                </Link>
                <div className="yt-icon-label" style={{cursor:"pointer"}}>
                    YouTube
                    <sup className="india" style={{fontSize:10, color:"rgb(140, 140, 140)"}}>
                        IN
                    </sup>
                </div>
            </div>
            <div className="search-bar">
                <input className="search" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text"></input>
                <Link to={`/search/${searchTerm}`}>
                    <div className="search__icon" style={{ backgroundColor:"rgb(70,69,69)" , height:31, display:'flex', alignItems:'center'}}>
                        <SearchIcon className="lens" style={{fontSize:18}} />
                    </div>
                </Link>
                <MicIcon style={{color:"white", marginLeft:10}} />
            </div>
            <div className="accessories">
                <VideoCallIcon style={{color:"white"}} />
                <AppsIcon style={{color:"white"}} />
                <NotificationsIcon style={{color:"white"}} />
                <Link onClick={ ()=> {
                    if(toggleOff){
                        finalLink("/more_from_youtube");
                        toggleOn(false);
                    }
                    else{
                        finalLink("/");
                        toggleOn(true);
                    }
                } } to={initLink} >
                    <AccountCircleIcon style={{color:"white", fontSize:40}}/>
                </Link>
            </div>
        </div>
    )
}
