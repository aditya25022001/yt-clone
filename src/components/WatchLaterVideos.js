import React from 'react'
import DragHandleIcon from '@material-ui/icons/DragHandle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../Stylesheets/watchlater.css'

export const WatchLaterVideos = ({ watch_thumbnail, watch_title, watch_channel }) => {
    return (
        <div className="watch_later_side" style={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
            <div className="drag" >
                <DragHandleIcon style={{ color:'gray'}} />
            </div>
            <div style={{ width:'10%', paddingRight:0 }}>
                <img className="watch_thumbnail" src={watch_thumbnail}></img>
            </div>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'flex-start', marginLeft:'3%', alignItems:'flex-start' }}>
                <div style={{ fontWeight:600, fontSize:17 }}>{watch_title}</div>
                <div className="chname_watch">{watch_channel}</div>
            </div>
            <div className="hover_vert" style={{ marginLeft:'50%' }}>
                <MoreVertIcon style={{fontSize:18, cursor:'pointer', marginLeft:'100%' }} />
            </div>
        </div>
    )
}   
