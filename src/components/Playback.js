import React from 'react'
import HelpIcon from '@material-ui/icons/Help';
import '../Stylesheets/playback.css'

export const Playback = () => {
    return (
        <div className="playback_main">
            <div className="first_playback">
                <div style={{ fontWeight:550, fontSize:18, marginBottom:50 }}>Playback and performance</div>
                <div style={{ fontWeight:400, fontSize:25, marginBottom:20 }}>Control your video viewing experience</div>
                <div style={{ color:'gray', fontSize:14 }}>Playback settings apply to this browser only</div>
            </div>
            <div className="hrline_playback"></div>
            <div style={{ display:'flex',flexDirection:'row' }}>
                <div style={{ fontWeight:550 }}>Info cards</div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <input type="checkbox"></input>
                    <div>Show in-video info cards</div>
                </div>
            </div>
        </div>
    )
}
