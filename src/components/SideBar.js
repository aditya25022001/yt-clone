import React from 'react'
import { SidebarElements } from './SidebarElements';
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
            <div className="home"><SidebarElements className="home" Icon={<HomeIcon style={{fontSize:25}}/>} title="Home"/></div>       
            <div className="trending"><SidebarElements className="trending" Icon={<WhatshotIcon style={{fontSize:20}}/>} title="Trending" /></div> 
            <div className="subscriptions"><SidebarElements className="subscriptions" Icon={<SubscriptionsIcon style={{fontSize:20}}/>} title="Subscriptions" /></div>    
            <div className="hrline"></div>
            <div className="library"><SidebarElements className="library" Icon={<VideoLibraryIcon style={{fontSize:20}}/>} title="Library" /></div>
            <div className="history"><SidebarElements className="history" Icon={<HistoryIcon style={{fontSize:20}}/>} title="History" /></div>
            <div className="your-videos"><SidebarElements className="your-videos" Icon={<VideoLabelIcon style={{fontSize:20}}/>} title="Your Videos" /></div>
            <div className="watch-later"><SidebarElements className="watch-later" Icon={<WatchLaterIcon style={{fontSize:20}}/>} title="Watch Later" /></div>
            <div className="liked-videos"><SidebarElements className="liked-videos" Icon={<ThumbUpAltIcon style={{fontSize:20}}/>} title="Liked Videos" /></div>   
            <div className="show-more"><SidebarElements clasName="show-more" Icon={<ExpandMoreIcon style={{fontSize:20}}/>} title="Show more"/></div> 
            <div className="hrline"></div>
            <div className="subscribed">SUBSCRIPTIONS</div>
            <div className="hrline"></div>
            <div className="more">MORE FROM YOUTUBE</div>
            <div className="yt-premium"><SidebarElements className="yt-premium" Icon={<YouTubeIcon style={{fontSize:20}}/>} title="YouTube Premium" /></div>
            <div className="movies"><SidebarElements clasName="movies" Icon={<LocalMoviesIcon style={{fontSize:20}}/>} title="Movies" /></div>
            <div className="gaming"><SidebarElements className="gaming" Icon={<SportsEsportsIcon style={{fontSize:20}}/>} title="Gaming" /></div>
            <div className="live"><SidebarElements className="live" Icon={<LiveTvIcon style={{fontSize:20}}/>} title="Live" /></div>
            <div className="learning"><SidebarElements className="learning" Icon={<WbIncandescentIcon style={{fontSize:20}}/>} title="Learning" /></div>
            <div className="hrline"></div> 
            <div className="settings"><SidebarElements className="settings" Icon={<SettingsIcon style={{fontSize:20}}/>} title="Settings" /></div>
            <div className="report"><SidebarElements className="report" Icon={<FlagIcon style={{fontSize:20}}/>} title="Report History" /></div>
            <div className="help"><SidebarElements className="help" Icon={<HelpIcon style={{fontSize:20}}/>} title="Help" /></div>           
            <div className="feedback"><SidebarElements className="feedback" Icon={<FeedbackIcon style={{fontSize:20}}/>} title="Feedback" /></div>
        </div>           
    )
}
