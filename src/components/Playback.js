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
            <div style={{ display:'flex',flexDirection:'row', width:'90%', justifyContent:'space-between' }}>
                <div style={{ fontWeight:550, fontSize:14 }}>Info cards</div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', flex:0.8 }}>
                    <input type="checkbox" className="checkbox_infocards" checked/>
                    <div style={{ marginLeft:'3%', fontSize:14, color:'gray' }}>Show in-video info cards</div>
                    <HelpIcon style={{ color:'gray', fontSize:20, marginLeft:'5%' }}/>
                </div>
            </div>
            <div style={{ display:'flex',flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:'4%' }}>
                <div style={{ fontWeight:550, flex:0.15, fontSize:14 }}>Subtitles and Closed Captions</div>
                <div style={{ display:'flex', flexDirection:'column', flex:0.76 }}>
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginBottom:'5%'}}>
                        <input type="checkbox" className="checkbox_subtitles_1" checked/>
                        <div style={{ marginLeft:'3%', fontSize:14, color:'gray' }}>Always show captions</div>
                    </div>
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start' }}>
                        <input type="checkbox" className="checkbox_subtitles_2" checked/>
                        <div style={{ marginLeft:'3%', fontSize:14, color:'gray' }}>Include auto-generated captions (when available)</div>
                    </div>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:'5%' }}>
            <div style={{ fontWeight:550, flex:0.15, fontSize:14, flex:0.2 }}>AV1 settings</div>
            <div style={{ display:'flex', flexDirection:'column', flex:0.76 }}>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'3%' }}>
                    <input type="radio" className="radio_auto" checked/>
                    <div style={{fontSize:14, color:'gray'}}>Auto (recommended)</div>
                </div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'3%'  }}>
                    <input type="radio" className="radio_auto"/>
                    <div style={{fontSize:14, color:'gray'}}>Prefer AV1 for SD</div>
                    <HelpIcon style={{ color:'gray', fontSize:20, marginLeft:'5%' }}/>
                </div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'3%'  }}>
                    <input type="radio" className="radio_auto"/>
                    <div style={{fontSize:14, color:'gray'}}>Always prefer AV1</div>
                    <HelpIcon style={{ color:'gray', fontSize:20, marginLeft:'5%' }}/>
                </div>
            </div>
            </div>
        </div>
    )
}
