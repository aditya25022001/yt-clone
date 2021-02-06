import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { Avatar } from '@material-ui/core';
import '../Stylesheets/comments.css';

export const Comments = ({accountImage, accountName, when, content, likes, dislikes}) => {
    return (
        <div className="comments">
            <Avatar src={accountImage}/>   
            <div className="info">
                <div className="info-comment">
                    <div style={{ marginRight:10, fontWeight:620 }}>{accountName}</div>
                    <div className="when-comment">{when}</div>
                </div>         
                <div className="comment" style={{ marginBottom:5 }}>{content}</div>
                <div className="likes-dislikes-comment">
                    <div className="likes"><ThumbUpAltIcon style={{ fontSize:18 }}/></div>
                    <div><sup style={{ fontSize:14, marginLeft:8, fontWeight:500, marginRight:15 }}>{likes}</sup></div>
                    <div className="dislikes"><ThumbDownAltIcon style={{ fontSize:18 }} /></div>
                    <div><sup style={{ fontSize:14, marginLeft:8, fontWeight:500, marginRight:15 }}>{dislikes}</sup></div>
                    <div className="reply"><sup>REPLY</sup></div>
                </div>
            </div>
            <div className="more"><MoreVertIcon /></div>
        </div>
    )
}
