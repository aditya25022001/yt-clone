import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import '../Stylesheets/Videos.css';

export const VideoCard = ({videoThumbnail, channelImage, title, channelName, views, timeStamp}) => {
    return (
        <div className="videoCard">
            <Link to="/watch">
                <img className="video__thumbnail" src={videoThumbnail}/>
            </Link>
            <div className="video__info">
                <Avatar classname="channel__image" src={channelImage} style={{marginTop:2, marginRight:15}} />
                <div className="video__text">
                    <Link to="/watch" style={{textDecoration:'none'}}>
                        <div className="video__title" style={{color:'white'}}>
                            {title}
                        </div>
                    </Link>
                    <div className="channel__name">
                        {channelName}
                    </div>
                    <div className="video__details">
                        <div>{views}</div>
                        <div className="dot"><sup>.</sup></div>
                        <div>{timeStamp}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
