import React, { useState } from 'react'
import { VideoPageVideos } from './VideoPageVideos';
import '../Stylesheets/mainVideoSearch.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import { Comments } from './Comments';
import SortIcon from '@material-ui/icons/Sort';

export const VideoPage = ({ thumbnailMain, titleMain, details, viewsMain, whenMain, likes, dislikes, channelNameMain, channelImage, subscribers, totalComments }) => {
    
 const inSty = {
        backgroundColor: 'rgb(204, 31, 31)',
        border: 'none',
        outline: 'none',
        outlineOffset: 'none',
        color: 'white',
        paddingTop:12,
        paddingRight:15,
        paddingBottom:10,
        paddingLeft:15,
        fontWeight: 600,
        borderRadius: 2
    }
    const [inStyle, finStyle] = useState(inSty);
    const finSty = {
        backgroundColor: 'rgb(115,115,115)',
        border: 'none',
        outline: 'none',
        outlineOffset: 'none',
        color: 'white',
        paddingTop:12,
        paddingRight:15,
        paddingBottom:10,
        paddingLeft:15,
        fontWeight: 600,
        borderRadius: 2
    }

    const [state, setstate] = useState('SUBSCRIBE');
    const [stateToggle, setstateToggle] = useState(true);

    return (
        <div className="main-page">
            <div className="main-video">
                <img className="video-thumbnail-main" src={thumbnailMain}/>
                <div className="title-details">
                    {titleMain} |  {details}
                </div>
                <div className="more-info">
                    <div className="views-when">
                        {viewsMain} views <sup style={{ fontWeight:800 }}>.</sup> {whenMain}
                    </div>
                    <div className="likes-dislikes">
                        <div><ThumbUpAltIcon /><sup style={{marginLeft:5}}>{likes}</sup></div>
                        <div><ThumbDownAltIcon /><sup style={{marginLeft:5}}>{dislikes}</sup></div>
                        <div><ShareIcon /><sup style={{marginLeft:5}}>SHARE</sup></div>
                        <div><PlaylistAddIcon /><sup style={{marginLeft:5}}>SAVE</sup></div>
                        <div className="more-main"><MoreHorizIcon /></div>
                    </div>
                </div>
                <div className="hrline"></div>
                <div className="channel">
                    <Avatar src={channelImage} style={{fontSize:30}} />
                    <div style={{ marginLeft:-770, marginTop:3 }}>
                        <div style={{ fontSize:14, fontWeight:500 }}>{channelNameMain}</div>
                        <div style={{ fontSize:12, fontWeight:500, color:'rgb(112,112,112)'}}>{subscribers} subscribers</div>
                    </div>
                    <div className="subscribe">
                        <button style={inStyle} onClick={() => {
                                if(stateToggle){
                                    setstate('SUBSCRIBED');
                                    setstateToggle(false);
                                    finStyle(finSty);
                                }
                                else{
                                    setstate('SUBSCRIBE');
                                    setstateToggle(true);
                                    finStyle(inSty)
                                }
                            }
                        }>{state}</button>
                    </div> 
                </div>
                <div className="hrline"></div>
                <div className="comment-heading">
                    <div className="total" style={{ marginRight:40 }}>{totalComments} Comments</div>
                    <div className="sort"><SortIcon /></div>
                    <div className="sortby">SORT BY</div>
                </div>
                <Comments 
                    accountImage="https://static.toiimg.com/photo/msid-73984558/73984558.jpg"
                    accountName="Music is world"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://static.toiimg.com/photo/msid-73984558/73984558.jpg"
                    accountName="Music is world"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://static.toiimg.com/photo/msid-73984558/73984558.jpg"
                    accountName="Music is world"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://static.toiimg.com/photo/msid-73984558/73984558.jpg"
                    accountName="Music is world"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://static.toiimg.com/photo/msid-73984558/73984558.jpg"
                    accountName="Music is world"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
            </div>
            <div className="sideVideos">
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"
                />
                <VideoPageVideos 
                    thumbnail="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fcd703870-7c23-11e6-ae24-f193b105145e?fit=scale-down&source=next&width=700"
                    title="New song out Boney M"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="MusicIndie"       
                />
            </div>
        </div>
    )
}
