import React from 'react'
import '../Stylesheets/sidevideos.css';
import { Link } from 'react-router-dom';

export const VideoPageVideos = ({ thumbnail, title, views, when, channelName}) => {
    return (
        <div className="video__template">
            <Link to="/watch" style={{ textDecoration:'none' }}>
                <img className="video_thumbnail" src={thumbnail}></img>
            </Link>
            <div className="video_info">
                <Link to="/watch" style={{ textDecoration:'none' }}>
                    <div style={{color:"white", fontWeight:600}}>{title}</div>
                </Link>
                <div className="channelInfo">{channelName}</div>
                <div className="views_when">
                    <div>{views}</div>
                    <div><sup style={{ marginLeft:10, marginRight:10, fontWeight:800 }}>.</sup></div>
                    <div>{when}</div>
                </div>
            </div>
        </div>
    )
}
