import React from 'react'
import { Elements } from './Elements';
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
import { Link } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div className="sidebar">      
            <div className="home"><Elements className="home" Icon={<HomeIcon style={{fontSize:25}}/>} title="Home"/></div>       
            <div className="trending"><Elements className="trending" Icon={<WhatshotIcon style={{fontSize:20}}/>} title="Trending" /></div> 
            <div className="subscriptions"><Elements className="subscriptions" Icon={<SubscriptionsIcon style={{fontSize:20}}/>} title="Subscriptions" /></div>    
            <div className="hrline"></div>
            <div className="library"><Elements className="library" Icon={<VideoLibraryIcon style={{fontSize:20}}/>} title="Library" /></div>
            <div className="history"><Elements className="history" Icon={<HistoryIcon style={{fontSize:20}}/>} title="History" /></div>
            <div className="your-videos"><Elements className="your-videos" Icon={<VideoLabelIcon style={{fontSize:20}}/>} title="Your Videos" /></div>
            <div className="watch-later"><Elements className="watch-later" Icon={<WatchLaterIcon style={{fontSize:20}}/>} title="Watch Later" /></div>
            <div className="liked-videos"><Elements className="liked-videos" Icon={<ThumbUpAltIcon style={{fontSize:20}}/>} title="Liked Videos" /></div>   
            <div className="show-more"><Elements clasName="show-more" Icon={<ExpandMoreIcon style={{fontSize:20}}/>} title="Show more"/></div> 
            <div className="hrline"></div>
            <div className="subscribed">SUBSCRIPTIONS</div>
            <div className="hrline"></div>
            <div className="more">MORE FROM YOUTUBE</div>
            <div className="yt-premium"><Elements className="yt-premium" Icon={<YouTubeIcon style={{fontSize:20}}/>} title="YouTube Premium" /></div>
            <div className="movies"><Elements clasName="movies" Icon={<LocalMoviesIcon style={{fontSize:20}}/>} title="Movies" /></div>
            <div className="gaming"><Elements className="gaming" Icon={<SportsEsportsIcon style={{fontSize:20}}/>} title="Gaming" /></div>
            <div className="live"><Elements className="live" Icon={<LiveTvIcon style={{fontSize:20}}/>} title="Live" /></div>
            <div className="learning"><Elements className="learning" Icon={<WbIncandescentIcon style={{fontSize:20}}/>} title="Learning" /></div>
            <div className="hrline"></div>
            <Link to="/settings" style={{ textDecoration:'none' }}>
                <div className="settings"><Elements className="settings" Icon={<SettingsIcon style={{fontSize:20}}/>} title="Settings" /></div>
            </Link>
            <Link to="/report" style={{ textDecoration:'none' }}>
                <div className="report"><Elements className="report" Icon={<FlagIcon style={{fontSize:20}}/>} title="Report History" /></div>
            </Link>
            <Link to="/help" style={{ textDecoration:'none' }}>
                <div className="help"><Elements className="help" Icon={<HelpIcon style={{fontSize:20}}/>} title="Help" /></div>           
            </Link>
            <Link to="/feedback" style={{textDecoration:'none'}}>
                <div className="feedback"><Elements className="feedback" Icon={<FeedbackIcon style={{fontSize:20}}/>} title="Feedback" /></div>
            </Link>
        </div>           
    )
}
