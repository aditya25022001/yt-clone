import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../Stylesheets/liked.css';

export const LikedSideVideos = ( { number, channel_liked, title_liked, thumbnail_liked } ) => {
    return (
        <div className="liked_side_video" style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
            <div style={{ color:'gray', fontWeight:500, marginRight:'2%', fontSize:14 }}>{number}</div>
            <div style={{ width:'15%' }}>
                <img className="liked_side_thumbnail" src={thumbnail_liked}/>
            </div>
            <div style={{ marginLeft:'2%' }}>
                <div>{title_liked}</div>
                <div className="chname_liked">{channel_liked}</div>
            </div>
            <div className="hover_vert" style={{ marginLeft:'40%' }}>
                <MoreVertIcon style={{ fontSize:18 }} />
            </div>
        </div>
    )
}
