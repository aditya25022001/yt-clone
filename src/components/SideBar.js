import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../Stylesheets/sidebar.css';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="home">
                <div className="icon">
                    <HomeIcon style={{color:"whitesmoke", fontSize: 20}} />
                </div>
                <div className="text">
                    Home
                </div>
            </div>
            <div className="trending">
                <div className="icon">
                    <WhatshotIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/> 
                </div>
                <div className="text">
                    Trending
                </div>
            </div>
            <div className="subscriptions">
                <div className="icon">
                    <SubscriptionsIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Subscriptions
                </div>
            </div>
            <div className="hrline"></div>
            <div className="library">
                <div className="icon">
                    <VideoLibraryIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Library
                </div>
            </div>
            <div className="history">
                <div className="icon">
                    <HistoryIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    History
                </div>
            </div>
            <div className="your-videos">
                <div className="icon">               
                    <VideoLabelIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Your Videos
                </div>
            </div>
            <div className="watch-later">
                <div className="icon">
                    <WatchLaterIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Watch Later
                </div>
            </div>
            <div className="liked-videos">
                <div className="icon">
                    <ThumbUpAltIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Liked Videos
                </div>
            </div>
            <div className="show-more">
                <div className="icon">
                    <ExpandMoreIcon style={{color:"rgb(128, 128, 128)", fontSize: 25, marginLeft: -4}}/>
                </div>
                <div className="text">
                    Show More
                </div>
            </div>
            <div className="hrline"></div>
            <div className="subscribed">SUBSCRIPTIONS</div>
            <div className="hrline"></div>
            <div className="more">MORE FROM YOUTUBE</div>
            <div className="yt-premium">
                <div className="icon">
                    <YouTubeIcon style={{color:"rgb(128,128,128)", fontSize: 20}} />
                </div>
                <div className="text">
                    Youtube Premium
                </div>
            </div>
            <div className="movies">
                <div className="icon">
                    <LocalMoviesIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/> 
                </div>
                <div className="text">
                    Movies
                </div>
            </div>
            <div className="gaming">
                <div className="icon">
                    <SportsEsportsIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Gaming
                </div>
            </div>
            <div className="live">
                <div className="icon">
                    <LiveTvIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Live
                </div>
            </div>
            <div className="learning">
                <div className="icon">               
                    <WbIncandescentIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Learning
                </div>
            </div> 
            <div clasName="hrline"></div> 
            <div className="settings">
                <div className="icon">
                    <SettingsIcon style={{color:"rgb(128,128,128)", fontSize: 20}} />
                </div>
                <div className="text">
                    Settings
                </div>
            </div>
            <div className="report">
                <div className="icon">
                    <FlagIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/> 
                </div>
                <div className="text">
                    Report History
                </div>
            </div>
            <div className="help">
                <div className="icon">
                    <HelpIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Help
                </div>
            </div>
            <div className="feedback">
                <div className="icon">
                    <FeedbackIcon style={{color:"rgb(128, 128, 128)", fontSize: 20}}/>
                </div>
                <div className="text">
                    Feedback
                </div>
            </div>       
        </div>
    )
}
