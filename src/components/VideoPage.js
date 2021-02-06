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
    const [state, setstate] = useState('SUBSCRIBE');
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
                        <button className="subs" onClick={e => setstate('SUBSCRIBED')}>{state}</button>
                    </div> 
                </div>
                <div className="hrline"></div>
                <div className="comment-heading">
                    <div className="total" style={{ marginRight:40 }}>{totalComments} Comments</div>
                    <div className="sort"><SortIcon /></div>
                    <div className="sortby">SORT BY</div>
                </div>
                <Comments 
                    accountImage="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg"
                    accountName="Fitness Freak"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg"
                    accountName="Fitness Freak"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg"
                    accountName="Fitness Freak"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg"
                    accountName="Fitness Freak"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
                <Comments 
                    accountImage="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg"
                    accountName="Fitness Freak"
                    when="2 months ago"
                    content="worth watching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    likes="28"
                    dislikes="5"
                />
            </div>
            <div className="sideVideos">
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"
                />
                <VideoPageVideos 
                    thumbnail="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
                    title="How to get fit in 30 days"
                    views="2.3 M views"
                    when="5 days ago"
                    channelName="AdiFitness"         
                />
            </div>
        </div>
    )
}
