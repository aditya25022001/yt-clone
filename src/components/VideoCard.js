import React from 'react'

export const VideoCard = ({videoThumbnail, channelImage, title, channelName, views, timeStamp}) => {
    return (
        <div>
            {videoThumbnail}
            {channelImage}
            {title}
            {channelName}
            {views}
            {timeStamp}
        </div>
    )
}
