import React from 'react'
import { Link } from 'react-router-dom';
import '../Stylesheets/advanced.css';


function setString(){
    let length = 20;
    let result = '';
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i=0; i<length;++i)
        result+=characters.charAt(Math.floor(Math.random()*characters.length));
    return result;
}

export const Advanced = () => {
    
    return (
        <div className="main_div_advanced">
            <div style={{ display:'flex', flexDirection:'row', width:'90%', justifyContent:'space-between' }}>
                <div>
                    <div style={{ fontWeight:550, fontSize:18, marginBottom:'8%' }} >Advanced settings</div>
                    <div style={{ fontWeight:500, fontSize:25 }}>Set up your YouTube exactly how you want it</div>
                </div>
                <div className="settings_icon_advanced">
                    <Link to="/settings" style={{ textDecoration:'none', color:'white' }}>
                        SETTINGS
                    </Link>
                </div>
            </div>
            <div className="hrline_advanced"></div>
            <div style={{ display:'flex', flexDirection:'column', height:'100%', justifyContent:'space-between' }}>
                <div style={{ display:'flex', flexDirection:'row', width:'50%', justifyContent:'space-between', marginBottom:'4%' }}>
                    <div style={{ flex:0.5, fontWeight:550, fontSize:15 }}>User ID</div>
                    <div className="copy_string" >
                        <div style={{ fontSize:15 }}>{setString()}</div>
                        <div style={{ color:'rgb(0,187,255)', cursor:'pointer' }}>COPY</div>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'row', width:'50%', justifyContent:'space-between', marginBottom:'4%' }}>
                    <div style={{ flex:0.5, fontWeight:550, fontSize:15 }}>Channel ID</div>
                    <div className="copy_string" >
                        <div style={{ fontSize:15 }}>{setString()}</div>
                        <div style={{ color:'rgb(0,187,255)', cursor:'pointer' }}>COPY</div>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'row', width:'50%', justifyContent:'space-between', marginBottom:'4%' }}>
                    <div style={{ flex:0.5, fontWeight:550, fontSize:15 }}>Move channel</div>
                    <div style={{ flex:0.48  }}>
                        <div style={{ marginBottom:'2%' }}><a href="" style={{ textDecoration:'none', color:'rgb(0,187,255)' }}>Move channel to a brand account</a></div>
                        <div style={{ color:'gray', fontSize:14, justifyContent:'flex-start' }}>You can move your channel to a brand account</div>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'row', width:'60%', justifyContent:'space-between', marginBottom:'4%' }}>
                    <div style={{ flex:0.5, fontWeight:550, fontSize:15 }}>Delete channel</div>
                    <div style={{ flex: 0.65, width:'100%' }}>
                        <div style={{ marginBottom:'2%' }}><a href="" style={{ textDecoration:'none', color:'rgb(0,187,255)' }}>Delete channel</a></div>
                        <div style={{ color:'gray', fontSize:14, justifyContent:'flex-start' }}>Deleting your YouTube channel won't close your Google Account</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
