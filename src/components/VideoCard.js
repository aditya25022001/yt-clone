import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export const VideoCard = ({videoThumbnail, channelImage, title, channelName, views, timeStamp}) => {
    return (
        <div className="videoCard">
            <img className="video__thumbnail" src={videoThumbnail}/>
            <div className="video__info">
                <Avatar classname="channel__image" src={channelImage} style={{marginTop:2, marginRight:15}} />
                <div className="video__text">
                    <div className="video__title">
                        {title}
                    </div>
                    <div className="channel__name">
                        {channelName}
                    </div>
                    <div className="video__details">
                        {views} . {timeStamp}
                    </div>
                </div>
            </div>
        </div>
    )
}
