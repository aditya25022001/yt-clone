import React from 'react'
import '../Stylesheets/searchPage.css';
import Avatar from '@material-ui/core/Avatar';
import { rgbToHex } from '@material-ui/core';

export const SearchPageVideos = ({ thumbnail, title, views, when, channelImage, channelName, details }) => {
    return (
        <div className="video__template">
            <img className="video_thumbnail" src={thumbnail}></img>
            <div className="video_info">
                <div style={{color:"white"}}>{title}</div>
                <div className="views_when">
                    <div>{views}</div>
                    <div><sup>.</sup></div>
                    <div>{when}</div>
                </div>
                <div className="channelInfo">
                    <Avatar src={channelImage} style={{marginRight:10, height:30, width:30}} />
                    <div>{channelName}</div>
                </div>
                <div className="video_details" style={{}}>{details}</div>
            </div>
        </div>
    )
}
