import React from 'react'
import '../Stylesheets/searchPage.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const SearchPageVideos = ({ thumbnail, title, views, when, channelImage, channelName, details }) => {
    return (
        <div className="video__template_search">
            <Link to="/watch">
                <img className="video_thumbnail_search" src={thumbnail}></img>
            </Link>
            <div className="video_info_search">
                <Link to="/watch" style={{ textDecoration:'none' }}>
                    <div style={{color:"white"}}>{title}</div>
                </Link>
                <div className="views_when_search">
                    <div>{views}</div>
                    <div><sup style={{ fontWeight:800, marginLeft:10, marginRight:10 }}>.</sup></div>
                    <div>{when}</div>
                </div>
                <div className="channelInfo_search">
                    <Avatar src={channelImage} style={{marginRight:10, height:30, width:30}} />
                    <div>{channelName}</div>
                </div>
                <div className="video_details_search">{details}</div>
            </div>
        </div>
    )
}
