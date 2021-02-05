import React from 'react'
import '../Stylesheets/sidevideos.css';

export const VideoPageVideos = ({ thumbnail, title, views, when, channelName}) => {
    return (
        <div className="video__template">
            <img className="video_thumbnail" src={thumbnail}></img>
            <div className="video_info">
                <div style={{color:"white", fontWeight:600}}>{title}</div>
                <div className="channelInfo">{channelName}</div>
                <div className="views_when">
                    <div>{views}</div>
                    <div><sup>.</sup></div>
                    <div>{when}</div>
                </div>
            </div>
        </div>
    )
}
